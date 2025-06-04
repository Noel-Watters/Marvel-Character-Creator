//Main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)