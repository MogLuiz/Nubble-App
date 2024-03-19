export interface MetaDataPaginationAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @descriptionThis interface is used to standardize the response of paginated data from the API
 * @param T The type of the data that will be paginated
 */
export interface PaginatedResponseAPI<T> {
  data: T[];
  meta: MetaDataPaginationAPI;
}