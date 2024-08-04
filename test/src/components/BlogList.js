// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'First Blog Post', summary: 'This is the summary of the first post.' },
  { id: 2, title: 'Second Blog Post', summary: 'This is the summary of the second post.' },
];

const BlogList = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {blogPosts.map(post => (
        <div key={post.id}>
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
