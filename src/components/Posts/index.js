import './styles.css';

import { PostCard } from '../PostCard/index'

export const Posts = ({ filteredPosts }) => {

  return (
    <div className="posts">
      {filteredPosts.map((post) => (
        <PostCard
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />
      ))}
    </div>
  )
}