import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addPost, fetchPosts, fetchTags } from '../api/api'

const Postlists = () => {

    const queryClient = useQueryClient()

    const { data = [], isError, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    })

    const { data: tagsData = [] } = useQuery({
        queryKey: ["tags"],
        queryFn: fetchTags
    })

    const { mutate, isPending } = useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const title = formData.get("title")
        const tags = Array.from(formData.keys())
            .filter(key => formData.get(key) === "on")

        if (!title || tags.length === 0) return

        mutate({
            id: data.length + 1,
            title,
            tags
        })

        e.target.reset() // ✅ fixed
    }

    return (
        <div className='p-4 m-3 gap-3 bg-blue-100'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter your post...'
                    className='p-4 m-3'
                    name='title'
                />

                <div className="tags">
                    {tagsData.map((tag) => (
                        <div key={tag}>
                            <input type="checkbox" name={tag} />
                            <label>{tag}</label>
                        </div>
                    ))}
                </div>

                <button disabled={isPending}>
                    {isPending ? "Posting..." : "Post"}
                </button>
            </form>

            <h2 className='p-3 m-2 text-bold text-2xl text-yellow-700'>
                Post List
            </h2>

            {isLoading && <p>Loading...</p>}
            {isError && <p>{error?.message}</p>}

            {data.map((post) => (
                <div key={post.id}>
                    <div>{post.title}</div>

                    {post.tags?.map((tag) => (
                        <span
                            className='text-white bg-green-500 p-1 m-2 rounded-lg'
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Postlists