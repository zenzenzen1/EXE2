import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'

import { PrimeReactProvider } from "primereact/api";
import App from './App.jsx';


import { twMerge } from 'tailwind-merge';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider
        value={{ ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}
        // value={{ unstyled: true, pt: Tailwind }}
    >
        <App />
    </PrimeReactProvider>
  </StrictMode>,
)
