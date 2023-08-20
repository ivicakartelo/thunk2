import {AddPostForm} from './features/posts/AddPostForm'
import {PostsList} from './features/posts/PostsList'
import ButtonAppBar from './ButtonAppBar'

function App() {
    return (
        <>
        <ButtonAppBar />
        
        
        <div className='container'>
            <div className='distance'>
                <AddPostForm />
            </div>
            
            <div className='distance'>
                <PostsList />
            </div>
            
        </div>
        </>
    )
}
export default App