import { Fragment } from 'react';
import { useRouter } from 'next/router';
const NewsDetail = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <Fragment>
      <h1>This is News Detail Page</h1>
      <p>{newsId}</p>
    </Fragment>
  );
};

export default NewsDetail;
