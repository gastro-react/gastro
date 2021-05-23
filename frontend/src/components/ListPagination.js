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
  padding: 0;
  list-style: none;
  overflow: hidden;
  `
  const PageItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  min-width: 64px;
  &:first-of-type {
    border-radius: 20px 0 0 20px;
  }
  &:last-of-type {
    border-radius: 0 20px 20px 0;
  }
  ${props => props.active && `
    background: #ff0;
    border: 1px solid #ff0;
    cursor: inherit;
    pointer-events: none;
  `}
`;
const PageLink = styled.a`
  text-decoration: none;
  ${props => props.active && `
    cursor: inherit;
    pointer-events: none;
`}
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

                <PageLink onClick={(e) => {e.preventDefault()}} active={page === currentPage} href="">{page + 1}</PageLink>

              </PageItem>
            ))
        }

      </Pagination>
    </PaginationNav>
  );
};

export default ListPagination;
