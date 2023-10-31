import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const list = Array(49)
  .fill()
  .map((_, i) => i + 1);
const lastPage = Math.ceil(list.length / 5) - 1;
const limit = 5;

const List = () => {
  const [page, setPage] = useState(0);
  const [currentPageList, setCurrentPageList] = useState([]);

  const onPrevClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onNextClick = () => {
    if (page < lastPage) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setCurrentPageList(list.slice(page * limit, page * limit + limit));
  }, [page]);

  return (
    <>
      <ul>
        {currentPageList.map((item) => (
          <li key={item}>
            <Link to={`/list/${item}`}>제목 {item}</Link>
          </li>
        ))}
      </ul>

      <button onClick={onPrevClick}>이전</button>
      <button onClick={onNextClick}>다음</button>
    </>
  );
};

export default List;
