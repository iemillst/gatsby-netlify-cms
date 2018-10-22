import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

export default () => (
  <div>
    <Header />
    <h2>Hello world!</h2>
    <br />
    <Link to="/contact/">Go to Contact</Link>
    <br />
    <Link to="/about/">Go to About</Link>
    <br />
    <Link to="/blog/">Go to Blog</Link>
    <br />
  </div>
);
//
