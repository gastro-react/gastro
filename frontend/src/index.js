import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, history } from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import App from './components/App'
import './i18n.js';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<>'loading...'</>}>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ConnectedRouter>
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)
