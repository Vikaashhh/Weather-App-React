// Importing necessary modules from React and ReactDOM
import { StrictMode } from 'react'; // Importing StrictMode for highlighting potential problems in an application
import { createRoot } from 'react-dom/client'; // Importing createRoot for rendering the React application
import App from './App.tsx'; // Importing the main App component from App.tsx
import './index.css'; // Importing the CSS file for styling

// Rendering the React application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> // Rendering the App component inside StrictMode
  </StrictMode>
);