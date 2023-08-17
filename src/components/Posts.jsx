import { useSelector, useDispatch } from "react-redux"
import { addPost } from "../features/posts/postsSlice"
import { useRef } from "react"

function Posts() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const title = useRef(null)
  const body = useRef(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const action = addPost({
      title: title.current.value,
      body: body.current.value
    })

    dispatch(action)
  }

  return (
    <div>
      <div>
        <h2>Add a Post</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={title} />
          <input type="text" ref={body}/>
          <input type="submit" />
        </form>
      </div>

      {
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts