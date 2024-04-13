import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import PopulationGraph from './components/Pages/Subpages/PopulationGraph/PopulationGraph';
import CryptoPrices from './components/Pages/Subpages/Crypto/CryptoPrices';
import MetaMask from './components/Pages/Subpages/MetaMask/MetaMask';

const router=createBrowserRouter([
  {
    path:'/',
    element:<PopulationGraph/>
  },
  {
    path:'/crypto',
    element:<CryptoPrices/>
  },
  {
    path:'/metamask',
    element:<MetaMask/>
  },
])

function App() {
  return (
        <div className='d-flex'>
          <Sidebar/>
          <RouterProvider router={router}/>
        </div>
  )
}

export default App
