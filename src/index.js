import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards, { loader as cardsLoader } from './routes/Cards'; //cardsLoader set as alias of loader to avoid crashes with other loaders for other routes
import NewCard, { action as newCardAction } from './routes/NewCard';
import CardDetails, { loader as cardDetailsLoader } from './routes/CardDetails';
import About from './routes/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import RootLayout from './routes/RootLayout';
import { Provider } from 'react-redux'; //It imports the store at the highest level of the application
import store from './store'; // This defines the store the app would use (can be many)

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
          { path: '/:id', element: <CardDetails />, loader: cardDetailsLoader },
        ],
      },
      { path: '/about', element: <About /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Makes the Redux store available to any nested components that need to access the Redux store */}
      <RouterProvider router={router} /> {/* Enables routing. Tells React router to watch the URL and render components according to the path */}
    </Provider>
  </React.StrictMode>
);
