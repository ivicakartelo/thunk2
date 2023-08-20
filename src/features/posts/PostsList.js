import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, fetchPosts, handleDelete } from './postsSlice'
import { UpdatePostForm } from './UpdatePostForm'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostExcerpt = ({ post }) => {
    const [showEditForm, setShowEditForm] = useState(false);
    const [updateId, setUpdateId] = useState('')
    const dispatch = useDispatch()

    const handleUpdate = (id) => {
        setUpdateId(id);
        setShowEditForm(true);
      }
    
      const paragraphs = post.content.split('\n');

      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14, fontFamily: 'Open Sans' }} color="text.secondary" gutterBottom>
              Published
            </Typography>
            <Typography variant="h2" component="div" style={{ fontFamily: 'Open Sans' }}>
            {post.title}
            </Typography>
            <Typography sx={{ mb: 1.5, fontFamily: 'Open Sans' }} color="text.secondary">
              Author
            </Typography>
            <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}>
            {paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
  ))}
            </Typography>
          </CardContent>
          <CardActions>
          {showEditForm && updateId === post.id ? (
                <UpdatePostForm
                    post={post}
                    setShowEditForm={setShowEditForm}
                />
                ) : (
                <button onClick={() => handleUpdate(post.id)}>
                    Update
                </button>
            )}

            <button onClick={() => dispatch(handleDelete(post.id))}>Delete</button>
          </CardActions>
        </React.Fragment>
      );

    return (
        <article key={post.id}>
            <Card variant="outlined">{card}</Card>
        </article>
    )
}

export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    console.log(posts)
    const postStatus = useSelector(state => state.posts.status)
    console.log(postStatus)
    const error = useSelector(state => state.posts.error)
    console.log(error)
    
    useEffect(() => {
        postStatus === 'idle' && dispatch(fetchPosts())
    },[postStatus, dispatch])

let content
    
postStatus === 'loading' ? (
    content = <h1>Loading...</h1>
) : postStatus === 'succeeded' ? (
    content = posts.map(post => <PostExcerpt key={post.id} post={post} />)
) : (
    content = <div>{error}</div>
)
    return (
        <section>
            <Typography variant="h2" component="div" style={{ fontFamily: 'Open Sans' }}>Posts </Typography>
            {content}
        </section>
    )
}