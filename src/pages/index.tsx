import Link from 'next/link';
import {Router, useRouter} from 'next/router';
const Home = () => {
  const news = [
    {
      id: 1,
      title: 'صفحه 1',
      contenr: 'محتوی1',
    },
    {
      id: 2,
      title: 'صفحه 2',
      contenr: 'محتوی2',
    },
    {
      id: 3,
      title: 'صفحه 3',
      contenr: 'محتوی3',
    },
    {
      id: 4,
      title: 'صفحه 4',
      contenr: 'محتوی4',
    },
  ];
  const router = useRouter();
  const handleClick = (id: number) => {
    if (id % 2 == 0) {
      router.push(`/news/${id}`);
    } else {
      alert('xxxx');
    }
  };
  return (
    <div>
      <h2>Mehrdad</h2>
      <ul>
        {news.map((item) => {
          return (
            <li key={item.id}>
              {/* <a href={`/news/${item.id}`} title={`${item.contenr}`}>

                {item.title}
              </a> */}

              {/* <Link href={`/news/${item.id}`}>
                <span>{item.title}</span>
              </Link> */}
              <button onClick={() => handleClick(item.id)}>
                <span>{item.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
