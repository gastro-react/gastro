import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setPage } from '../services/actions/setPage';

const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 90%;
  margin: 0 auto;
`;
const Pagination = styled.ul`
  display: flex;
  padding: 0 20px;
  list-style: none;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`
const PageItem = styled.li`
  display: inline;
  padding: 12px;
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  ${props => props.active && `
    background: #ff0;
    border-right: 1px solid #ff0;
    border-left: 1px solid #ff0;
  `}
`;
const PageLink = styled.a`
  text-decoration: none;
`;

const ListPagination = () => {
  const dispatch = useDispatch();
  const { articlesCount, currentPage } = useSelector(state => state.articleList)

  if (articlesCount <= 10) return null;

  const range = [];
    for (let i = 0; i < Math.ceil(articlesCount / 10); i += 1) {
      range.push(i);
  }
  const handlePaginationClick = (e, page) => {
    e.preventDefault();
    if (page === currentPage) return;
    dispatch(setPage(page))
  }

  return (
    <PaginationNav>
      <Pagination>
        {
          range.map(page => (
              <PageItem
                active={page === currentPage}
                onClick={(e) => handlePaginationClick(e, page)}
                key={`${page}`}>

                <PageLink href="">{page + 1}</PageLink>

              </PageItem>
            ))
        }

      </Pagination>
    </PaginationNav>
  );
};

export default ListPagination;
