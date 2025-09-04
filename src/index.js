import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards, { loader as cardsLoader } from './routes/Cards'; //cardsLoader set as alias of loader to avoid crashes with other loaders for other routes
import NewCard, { action as newCardAction } from './routes/NewCard';
import About from './routes/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import RootLayout from './routes/RootLayout';

// router: Object with route configuration (route definition) that defines the path and element (component should be rendered when the path is active).
// createBrowserRouter: Function that creates the router
// loader prepares data needed for the route by executing cardsLoader alias for loader function from Cards.jsx
// action executes a function as part of the NewCard's Form action submission
const router = createBrowserRouter([
  { path: '/', element: <RootLayout />,
    children: [
      { path: '/', element: <Cards />,
        loader: cardsLoader,
        children: [
          { path: '/create-card', element: <NewCard />, action: newCardAction },
        ],
      },
      { path: '/about', element: <About /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Enables routing. Tells React router to watch the URL and render components according to the path */}
  </React.StrictMode>
);
