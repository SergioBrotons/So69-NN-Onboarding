import remarkGfm from 'remark-gfm'

// ... existing imports ...

// ... inside component ...

  // if (cardError || !card) {
  //     return <div>Card not found</div>
  // }

// ...

                {lesson ? (
                    <article className="prose prose-lg mx-auto bg-white p-8 rounded-lg shadow">
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
