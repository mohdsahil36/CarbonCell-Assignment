import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './components/Sidebar/Sidebar';
import PopulationGraph from './components/Pages/Subpages/PopulationGraph/PopulationGraph';
import CryptoPrices from './components/Pages/Subpages/Crypto/CryptoPrices';
import MetaMask from './components/Pages/Subpages/MetaMask/MetaMask';

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<HomePage/>
//   },
//   {
//     path:'/organization',
//     element:<OrganizationPage/>
//   },
//   {
//     path:'/assets',
//     element:<AssetsPage/>
//   },
//   {
//     path:'/trade',
//     element:<TradePage/>
//   },
//   {
//     path:'/history',
//     element:<HistoryPage/>
//   },
//   {
//     path:'/wallet',
//     element:<Wallet/>
//   }
// ])

function App() {
  return (
      // <div className='d-flex'>
      //   <div className='col-md-3 p-0 sideBar'>
      //     <Sidebar />
      //   </div>
      //   <div className='col-md-9 text-success'>
      //     <RouterProvider router={router}/>
      //   </div>
      // </div>
      <>
        {/* <PopulationGraph/> */}
        {/* <CryptoPrices/> */}
        <MetaMask/>
      </>
  )
}

export default App
