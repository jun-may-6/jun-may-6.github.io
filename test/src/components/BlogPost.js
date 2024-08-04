// src/components/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'First Blog Post', content: 'This is the full content of the first post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the full content of the second post.' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
