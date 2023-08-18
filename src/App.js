import {AddPostForm} from './features/posts/AddPostForm'
import {PostsList} from './features/posts/PostsList'

function App() {
    return (
        <div className='container'>
            <AddPostForm />
            <PostsList />
        </div>
    )
}
export default App