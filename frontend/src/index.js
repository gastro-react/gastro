import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store, history } from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { ConnectedRouter } from 'react-router-redux';
import { ConnectedRouter } from 'connected-react-router'
import { GlobalStyle, LightTheme, DarkTheme } from './ui/theme'
import App from './components/App'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={DarkTheme} >
          <GlobalStyle />
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ThemeProvider>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
)
