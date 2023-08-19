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
/*
      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be*nev*o*lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      );

      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14, fontFamily: 'Dancing Script', cursive }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div" style={{ fontFamily: 'Dancing Script', cursive }}>
              be*nev*o*lent
            </Typography>
            <Typography sx={{ mb: 1.5, fontFamily: 'Dancing Script', cursive }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Dancing Script', cursive }}>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      );
    

      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14, fontFamily: 'Dancing Script', 'cursive' }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div" style={{ fontFamily: 'Dancing Script', 'cursive' }}>
              be*nev*o*lent
            </Typography>
            <Typography sx={{ mb: 1.5, fontFamily: 'Dancing Script', 'cursive' }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Dancing Script', 'cursive' }}>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      );
  */   
 
      const paragraphs = post.content.split('\n');

      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14, fontFamily: 'Dancing Script' }} color="text.secondary" gutterBottom>
              Published
            </Typography>
            <Typography variant="h5" component="div" style={{ fontFamily: 'Dancing Script' }}>
            {post.title}
            </Typography>
            <Typography sx={{ mb: 1.5, fontFamily: 'Dancing Script' }} color="text.secondary">
              Author
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Dancing Script' }}>
            {paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML=
            {{ __html: paragraph }}></p>
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
            <h2>Posts</h2>
            {content}
        </section>
    )
}