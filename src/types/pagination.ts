export interface PaginationMetaData {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  firstPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface PaginatedResponseData<T> {
  meta: PaginationMetaData;
  data: T[];
}