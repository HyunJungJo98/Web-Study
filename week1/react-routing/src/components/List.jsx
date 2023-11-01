import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Page from './Page';
import { useRecoilState } from 'recoil';
import { pageAtom } from '../atom/pageAtom';
import style from './List.module.css';

const list = Array(49)
  .fill()
  .map((_, i) => i + 1);
const lastPage = Math.ceil(list.length / 5) - 1;
const limit = 5;

const List = () => {
  const [page, setPage] = useRecoilState(pageAtom);

  const navigate = useNavigate();

  const onPrevClick = () => {
    if (page > 0) {
      navigate(`/list/page/${page - 1}`);
      setPage(page - 1);
    }
  };
  const onNextClick = () => {
    if (page < lastPage) {
      navigate(`/list/page/${page + 1}`);
      setPage(page + 1);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path='/page/:page'
          element={<Page list={list} page={page} limit={limit} />}
        />
      </Routes>

      <button onClick={onPrevClick} className={style.prev_next_button}>
        이전
      </button>
      <button onClick={onNextClick} className={style.prev_next_button}>
        다음
      </button>
    </>
  );
};

export default List;
