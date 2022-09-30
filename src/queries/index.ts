import { gql } from '@apollo/client'

export const GET_URLS = gql`
  query GetUrls($page: Int!) {
    short_urls(page: $page) {
      data {
        url
        clicks
        short_url
        id
      }
      paginatorInfo {
        count
        currentPage
        lastPage
        hasMorePages
      }
    }
  }
`

export const CREATE_URL = gql`
  mutation CreateUrl($url: String!) {
    shorten_url(url: $url) {
      short_url {
        url
        clicks
        short_url
        id
      }
    }
  }
`
