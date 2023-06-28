import {useEffect, useMemo, useState } from "react"

interface UsePaginationProps<T> {
  items: T[];
  initialPage?: number;
  initialPageSize?: number;
}

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 12

export const usePagination = <T>(props: UsePaginationProps<T>) => {
  const {items, initialPageSize, initialPage} = props

  const [page, setPage] = useState(() => initialPage ?? DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(() => initialPageSize ?? DEFAULT_PAGE_SIZE);

  const isLastPage = page * pageSize >= items.length

  const reset = () => {
    setPage(DEFAULT_PAGE)
    setPageSize(DEFAULT_PAGE_SIZE)
  }

  const next = () => !isLastPage && setPage(prev => prev + 1)

  const visibleItems = useMemo(() => items.slice(0, page * pageSize), [items, page, pageSize])

  const isEmpty = visibleItems.length === 0


  useEffect(reset, [items])

  return {
    next,
    reset,
    pageSize: DEFAULT_PAGE_SIZE,
    updatePageSize: setPageSize,
    page,
    isLast: isLastPage,
    visibleItems,
    isEmpty
  }
}
