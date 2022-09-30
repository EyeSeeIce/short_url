import { createSlice } from '@reduxjs/toolkit'
import { LinkItemProps, Meta } from '../../types'

export interface ClientState {
  links: LinkItemProps[]
  ownLinks: LinkItemProps[]
  meta: Meta
}

const initialState: ClientState = {
  links: [],
  ownLinks: [],
  meta: {
    count: 0,
    currentPage: 1,
    hasMorePages: false,
    lastPage: 1,
  },
}

export const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setLinks: (state, action) => {
      state.links = action.payload.links
    },
    setOwnLinks: (state, action) => {
      state.ownLinks.push(action.payload.link)
    },
    setMeta: (state, action) => {
      state.meta = action.payload.meta
    },
  },
})

export const { setLinks, setOwnLinks, setMeta } = linkSlice.actions

export default linkSlice.reducer
