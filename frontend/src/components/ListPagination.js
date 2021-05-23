import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import agent from '../agent';
import { SET_PAGE } from '../utils/constants/actionTypes';

const ListPagination = () => {
  const dispatch = useDispatch();
  const { pager, articlesCount, currentPage } = useSelector(state => state.articleList)

  const onSetPage = (page, payload) =>{
    dispatch({ type: SET_PAGE, page, payload })
  }

  if (articlesCount <= 10) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
    range.push(i);
  }

  const setPage = page => {
    if(pager) {
      onSetPage(page, pager(page));
    }else {
      onSetPage(page, agent.Articles.all(page))
    }
  };

  return (
    <nav>
      <ul className="pagination">

        {
          range.map(v => {
            const isCurrent = v === currentPage;
            const onClick = e => {
              e.preventDefault();
              setPage(v);
            };
            return (
              <li
                className={ isCurrent ? 'page-item active' : 'page-item' }
                onClick={onClick}
                key={v.toString()}>

                <a className="page-link" href="">{v + 1}</a>

              </li>
            );
          })
        }

      </ul>
    </nav>
  );
};

export default ListPagination;
