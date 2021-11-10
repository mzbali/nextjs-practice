import Link from 'next/link';
import { Fragment } from 'react';

const News = () => {
  return (
    <Fragment>
      <h1>This is News Page</h1>
      <ul>
        <li>
          <Link href="/news/n1">Next is great</Link>
        </li>
        <li>
          <Link href="/news/n2">Next is cool</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
