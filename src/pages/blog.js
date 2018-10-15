import React from 'react';
import { Link } from 'gatsby';

const BlogPage = () => (
  <div>
    <h1>Blog page</h1>

    <Link to="/">Go to Home</Link>
    <br />
    <Link to="/contact/">Go to Contact</Link>
    <br />
    <Link to="/about/">Go to About</Link>
    <br />
  </div>
);

export default BlogPage;
