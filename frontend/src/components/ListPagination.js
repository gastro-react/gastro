import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setPage } from '../services/actions/setPage'
import { ChevronIcon } from '../components/Icons'

const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 90%;
  margin: 0 auto;
`
const Pagination = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  overflow: hidden;
`
const StyledPageItem = styled.li`
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
  ${(props) =>
    props.active &&
    `
    background: #ff0;
    border: 1px solid #ff0;
    cursor: inherit;
    pointer-events: none;
  `}
`
const PageLink = styled.a`
  text-decoration: none;
  ${(props) =>
    props.active &&
    `
    cursor: inherit;
    pointer-events: none;
`}
`

const ListPagination = () => {
  const dispatch = useDispatch()
  const { articlesCount, currentPage } = useSelector(
    (state) => state.articleList
  )

  if (articlesCount <= 10) return null

  const range = []
  for (let i = 0; i < Math.ceil(articlesCount / 10); i += 1) {
    range.push(i)
  }
  const startPage = range.shift()
  const endPage = range.pop()

  const handlePaginationClick = (e, page) => {
    e.preventDefault()
    if (page === currentPage) return
    dispatch(setPage(page))
  }

  const PageItem = ({ page }) => (
    <StyledPageItem
      active={currentPage === page}
      onClick={(e) => handlePaginationClick(e, page)}
    >
      <PageLink
        onClick={(e) => {
          e.preventDefault()
        }}
        active={currentPage === page}
        href=""
      >
        {page + 1}
      </PageLink>
    </StyledPageItem>
  )
  const ChevronPage = ({ page, direction }) => (
    <StyledPageItem
      active={false}
      onClick={(e) => handlePaginationClick(e, page)}
    >
      <ChevronIcon direction={direction} />
    </StyledPageItem>
  )

  const MiddlePageItems = () => {
    if (!range.length) return null
    return (
      <>
        <ChevronPage
          direction="left"
          page={currentPage === startPage ? startPage : currentPage - 1}
        />
        {range.map((page) => (
          <PageItem page={page} key={page} />
        ))}
        <ChevronPage
          direction="right"
          page={currentPage === endPage ? endPage : currentPage + 1}
        />
      </>
    )
  }

  return (
    <PaginationNav>
      <Pagination>
        <PageItem page={startPage} key={startPage} />
        <MiddlePageItems />
        <PageItem page={endPage} key={endPage} />
      </Pagination>
    </PaginationNav>
  )
}

export default ListPagination
