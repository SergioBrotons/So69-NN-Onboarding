-- Create custom types
CREATE TYPE user_role AS ENUM ('admin', 'mentor', 'participant');
CREATE TYPE lesson_status AS ENUM ('draft', 'review', 'approved', 'archived');
CREATE TYPE card_status AS ENUM ('active', 'archived', 'draft');

-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role user_role DEFAULT 'participant',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create cards table
CREATE TABLE cards (
  id TEXT PRIMARY KEY, -- Using the ID from Excel (e.g., 'C001')
  title_en TEXT NOT NULL,
  title_es TEXT NOT NULL,
  description_en TEXT,
  description_es TEXT,
  difficulty_level INTEGER CHECK (difficulty_level BETWEEN 1 AND 5),
  status card_status DEFAULT 'draft',
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create dependencies table (Many-to-Many self reference)
CREATE TABLE card_dependencies (
  card_id TEXT REFERENCES cards(id) ON DELETE CASCADE,
  dependency_id TEXT REFERENCES cards(id) ON DELETE CASCADE,
  PRIMARY KEY (card_id, dependency_id)
);

-- Create lessons content table
CREATE TABLE lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  card_id TEXT REFERENCES cards(id) ON DELETE CASCADE,
  version INTEGER NOT NULL DEFAULT 1,
  language CHAR(2) NOT NULL CHECK (language IN ('en', 'es')),
  content TEXT NOT NULL, -- Markdown content
  status lesson_status DEFAULT 'draft',
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(card_id, version, language)
);

-- Create user progress table
CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  card_id TEXT REFERENCES cards(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('not_started', 'in_progress', 'completed')),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  notes TEXT,
  UNIQUE(user_id, card_id)
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE card_dependencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Public/Authenticated users can read basic card info
CREATE POLICY "Public cards are viewable by everyone" ON cards
  FOR SELECT USING (true);

-- Only admins/mentors can edit cards
CREATE POLICY "Admins can insert cards" ON cards
  FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM profiles WHERE role IN ('admin', 'mentor')));

CREATE POLICY "Admins can update cards" ON cards
  FOR UPDATE USING (auth.uid() IN (SELECT id FROM profiles WHERE role IN ('admin', 'mentor')));

-- Lesson visibility
CREATE POLICY "Published lessons are viewable by everyone" ON lessons
  FOR SELECT USING (status = 'approved');

CREATE POLICY "Admins can view all lessons" ON lessons
  FOR SELECT USING (auth.uid() IN (SELECT id FROM profiles WHERE role IN ('admin', 'mentor')));

CREATE POLICY "Admins can insert lessons" ON lessons
  FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM profiles WHERE role IN ('admin', 'mentor')));

CREATE POLICY "Admins can update lessons" ON lessons
  FOR UPDATE USING (auth.uid() IN (SELECT id FROM profiles WHERE role IN ('admin', 'mentor')));

-- User Progress: Users can see their own progress
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Profiles: Users can see their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));

-- Trigger to handle updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()    
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_profiles_updated BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();

CREATE TRIGGER on_cards_updated BEFORE UPDATE ON cards
  FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();

CREATE TRIGGER on_lessons_updated BEFORE UPDATE ON lessons
  FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
