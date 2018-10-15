import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => (
  <div>
    <h1>About page</h1>

    <Link to="/">Go to Home</Link>
    <br />
    <Link to="/contact/">Go to Contact</Link>
    <br />
    <Link to="/blog/">Go to Blog</Link>
    <br />
  </div>
);

export default AboutPage;
