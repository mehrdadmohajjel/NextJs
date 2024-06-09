import Link from 'next/link';
import {Router, useRouter} from 'next/router';
import React from 'react';
import {useEffect} from 'react';
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
  const [selectedId, setSelectedId] = React.useState<number>(0);

  useEffect(() => {
    setSelectedId(Number(router.query.id));
  }, [router.query]);
  const handleClick = (id: number) => {
    if (id % 2 == 0) {
      // router.push(`/news/${id}`);
      router.push(`/news/?id=${id}`, undefined, {shallow: true});
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

              {/* {
                <Link
                  onClickCapture={() => handleClick(item.id)}
                  href={`/news/${item.id}`}
                  style={{
                    backgroundColor: selectedId === item.id ? 'red' : 'white',
                  }}
                  onClick={() => handleClick(item.id)}
                >
                  <span>{item.title}</span>
                </Link>
              } */}

              <button
                style={{
                  backgroundColor: selectedId === item.id ? 'red' : 'white',
                }}
                onClick={() => handleClick(item.id)}
              >
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
