import React from 'react';
import ReactDOM from 'react-dom/client';


import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'Global.style';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';

const theme = {
 
  spacing: value => `${value * 4}px`,
 
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
    
    </Provider>
  </StrictMode>
);
