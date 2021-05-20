import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';

//global styles
import '../assets/css/index.css';

//app style
const style = {
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
  overflowY: 'scroll',
}

function App({Component, pageProps}) {
  return (
    <>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>
      <Provider store={store}>
        <div style={style}>
          <Component {...pageProps}/>
        </div>
      </Provider>
    </>
  )
}

export default App;