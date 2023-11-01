import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Page.module.css';

const Page = ({ list, page, limit }) => {
  const [currentPageList, setCurrentPageList] = useState([]);

  useEffect(() => {
    setCurrentPageList(list.slice(page * limit, page * limit + limit));
  }, [page]);

  return (
    <>
      <ul>
        {currentPageList.map((item) => (
          <li key={item}>
            <Link to={`/item/${item}`} className={style.title}>
              제목 {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
