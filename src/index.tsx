import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/variables.scss';
import './styles/global.scss';
import App from './components/app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
