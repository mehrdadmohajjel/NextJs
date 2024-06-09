import {useRouter} from 'next/router';

const NewsItem = () => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div>
      <h2>NEws Come From {id}</h2>
    </div>
  );
};
export default NewsItem;
