import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

export default async function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { id } = await params
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  // Fetch Card details
  const { data: card, error: cardError } = await supabase
    .from('cards')
    .select('*')
    .eq('id', id)
    .single()

  // Fetch all approved lessons
  const { data: lessons, error: lessonError } = await supabase
    .from('lessons')
    .select('*')
    .eq('card_id', id)
    .eq('status', 'approved')
    .order('version', { ascending: false })

  // Select best lesson (Prioritize EN, fallback to any)
  const lesson = lessons?.find(l => l.language === 'en') || lessons?.[0];

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {card?.title_en || 'Card Not Found'} <span className="text-gray-400 text-lg">({id})</span>
                    </h1>
                     <Link href="/dashboard" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        &larr; Back to Dashboard
                     </Link>
                </div>
            </div>
        </div>
        <main className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                {lesson ? (
                    <article className="prose prose-lg prose-slate mx-auto bg-white p-8 rounded-lg shadow text-gray-900">
                         <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.content}</ReactMarkdown>
                    </article>
                ) : (
                    <div className="rounded-md bg-yellow-50 p-4">
                        <div className="flex">
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-yellow-800">No Content Available</h3>
                                <div className="mt-2 text-sm text-yellow-700">
                                    <p>There is no approved lesson content for this card yet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    </div>
  )
}
