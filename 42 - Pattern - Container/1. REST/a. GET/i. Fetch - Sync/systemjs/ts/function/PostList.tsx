/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import { Post } from './Post';
import PostComponent from './PostComponent';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <PostComponent key={post.id} title={post.title} />
    ))}
  </ul>
);

export default PostList;
