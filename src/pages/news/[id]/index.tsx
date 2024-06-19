import MainLayout from '@/layouts/MainLayout';
import {useRouter} from 'next/router';
import {ReactElement} from 'react';

const NewsItem = () => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div>
      <h2>NEws Come From {id}</h2>
    </div>
  );
};

NewsItem.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default NewsItem;
