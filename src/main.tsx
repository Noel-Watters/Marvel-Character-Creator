//Main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)