import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import Test from './containers/Test'
import List from './containers/List'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <>
      <Test />
      <List />
    </>
  </Provider>,
  document.getElementById('root')
)
