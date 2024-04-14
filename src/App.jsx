import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './components/Pages/Subpages/Homepage/Homepage';
import PopulationGraph from './components/Pages/Subpages/PopulationGraph/PopulationGraph';
import CryptoPrices from './components/Pages/Subpages/Crypto/CryptoPrices';
import MetaMask from './components/Pages/Subpages/MetaMask/MetaMask';

const AppLayout = () => {
  return (
    <div className="App d-flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/population",
        element: <PopulationGraph />,
      },
      {
        path: "/crypto",
        element: <CryptoPrices />,
      },
      {
        path: "/metamask",
        element: <MetaMask />,
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={appRouter}>
      <AppLayout />
    </RouterProvider>
  );
}

export default App;