import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch cards
  const { data: cards, error } = await supabase
    .from('cards')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching cards', error)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Learning Dashboard</h1>
            <div className="text-sm text-gray-600">
                Logged in as: {user.email}
            </div>
        </header>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards?.map((card: any) => (
            <Link key={card.id} href={`/cards/${card.id}`} className="block">
                <div className="overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg">
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {card.id}
                        </span>
                        <span className="text-xs text-gray-500">Lvl {card.difficulty_level}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{card.title_en}</h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {card.description_en}
                    </p>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                     <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Start Lesson &rarr;
                     </span>
                </div>
                </div>
            </Link>
          ))}
          {(!cards || cards.length === 0) && (
            <p className="col-span-full text-center text-gray-500">No cards found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
