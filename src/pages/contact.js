import React from 'react';
import { Link } from 'gatsby';

const ContactPage = () => (
  <div>
    <h1>Contact page</h1>

    <Link to="/">Go to Home</Link>
    <br />
    <Link to="/about/">Go to About</Link>
    <br />
    <Link to="/blog/">Go to Blog</Link>
    <br />
  </div>
);

export default ContactPage;
