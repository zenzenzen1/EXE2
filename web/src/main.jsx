import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
import App from './App.jsx'


import { twMerge } from 'tailwind-merge';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider
        value={{ ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}
        // value={{ unstyled: true, pt: Tailwind }}
    >
        <App />
    </PrimeReactProvider>
  </StrictMode>,
)
