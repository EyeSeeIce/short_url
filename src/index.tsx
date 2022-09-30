import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom'

import './assets/styles/global.scss'
import './assets/styles/variables/css-variables.scss'
import './assets/styles/variables/breakpoints.scss'
import './assets/styles/mixins.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const client = new ApolloClient({
  uri: 'http://test-task.profilancegroup-tech.com/graphql',
  cache: new InMemoryCache(),
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
