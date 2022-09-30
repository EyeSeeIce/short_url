export type LinkItemProps = {
  readonly id: string
  readonly url: string
  readonly short_url: string
  readonly clicks: number
}

export type getUrlsApolloType = {
  short_urls: {
    data: LinkItemProps[]
    paginatorInfo: {
      count: number
      currentPage: number
      lastPage: number
      hasMorePages: number
    }
  }
}

export type Meta = {
  count: number
  currentPage: number
  hasMorePages: boolean
  lastPage: number
}
