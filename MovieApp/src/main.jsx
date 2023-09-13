import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetMoviebyId from './Components/GetMovie/GetMovie.jsx';
import Search from './Components/Search/Search.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/:id",
    element: <GetMoviebyId />,
  },
  {
    path: "/search/:word",
    element: <Search />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
