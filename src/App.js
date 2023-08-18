import {AddPostForm} from './features/posts/AddPostForm'
import {PostsList} from './features/posts/PostsList'

function App() {
    return (
        <div className='container'>
            <div className='distance'>
                <AddPostForm />
            </div>
            
            <div className='distance'>
                <PostsList />
            </div>
            
        </div>
    )
}
export default App