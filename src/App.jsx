import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './components/Pages/Subpages/HomePage';
import OrganizationPage from './components/Pages/Subpages/Organization';
import AssetsPage from './components/Pages/Subpages/Assets';
import TradePage from './components/Pages/Subpages/Trade';
import HistoryPage from './components/Pages/Subpages/History';
import Wallet from './components/Pages/Subpages/Wallet';

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/organization',
    element:<OrganizationPage/>
  },
  {
    path:'/assets',
    element:<AssetsPage/>
  },
  {
    path:'/trade',
    element:<TradePage/>
  },
  {
    path:'/history',
    element:<HistoryPage/>
  },
  {
    path:'/wallet',
    element:<Wallet/>
  }
])

function App() {
  return (
      <div className='row'>
        <div className='col-lg-3 col-md-4 p-0 sideBar'>
          <Sidebar />
        </div>
        <div className='col-lg-9 col-md-8 p-0 text-success'>
          <RouterProvider router={router}/>
        </div>
      </div>
  )
}

export default App
