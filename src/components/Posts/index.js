import './styles.css';

import { PostCard } from '../PostCard/index'
import { useHistory } from 'react-router-dom';

export const Posts = ({ filteredPosts }) => {

  const history = useHistory();

  const handleClick = (postId) => {
    console.log('Aqui ja era');
    history.push(`/posts/${postId}`);
  }

  return (
    <div className="posts">
      {filteredPosts.map((post) => (
        <div
          className="post-request"
          onClick={() => {
            handleClick(post.id)
          }}
          key={post.id}
        >
          <PostCard
            title={post.title}
            body={post.body}
            id={post.id}
            cover={post.cover}
          />
        </div>
      ))}
    </div>
  )
}