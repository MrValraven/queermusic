import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ArtistPage from './pages/ArtistPage/ArtistPage.jsx';
import OurArtists from './pages/OurArtists/OurArtists.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/artists",
    element: <OurArtists />,
  },
  {
    path: "/artists/:artistName",
    element: <ArtistPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);