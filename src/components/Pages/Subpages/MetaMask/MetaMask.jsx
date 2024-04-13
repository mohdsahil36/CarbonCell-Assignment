import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import classes from './MetaMask.module.css';

function App() {
  const [web3, setWeb3] = useState(null);
   // Connecting account
  const [account, setAccount] = useState(null);
  // Connection status
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    // Check if there is a connected account in localStorage
    const storedAccount = localStorage.getItem('connectedAccount');
    if (storedAccount) {
      setAccount(storedAccount);
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        // Set connecting state to true
        setConnecting(true);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Initialize web3 instance with MetaMask provider
        const web3Instance = new Web3(window.ethereum);
        // Set web3 instance in state
        setWeb3(web3Instance);
        // Get the list of accounts and set the connected account
        const accounts = await web3Instance.eth.getAccounts();
        const connectedAccount = accounts[0];
        setAccount(connectedAccount);
         // Store connected account in localStorage
        localStorage.setItem('connectedAccount', connectedAccount); // Store connected account in localStorage
        alert(`Connected with MetaMask!`);
      } else {
        alert('MetaMask is not installed. Please install it to connect your wallet.');
      }
    } catch (error) {
      console.error(error);
      if (error.code === 4001) {
        alert('Connection request denied by the user.');
      } else {
        alert('Failed to connect with MetaMask. Please check your MetaMask installation and try again.');
      }
    } finally {
      // Reset connecting state
      setConnecting(false);
    }
  };

  const disconnectWallet = () => {
    // Reset web3 instance
    setWeb3(null);
    // Reset connected account
    setAccount(null);
     // Remove connected account from localStorage
    localStorage.removeItem('connectedAccount');
    alert('Disconnected from MetaMask');
  };

  return (
    <div className='w-100'>
      <h2 className={classes['metamask-heading']}>MetaMask Account</h2>
      <div className={classes.metamask}>
        <img src="https://www.investopedia.com/thmb/v5K6POcZQXnjy1MhKNSNTghQ6jM=/fit-in/1500x750/filters:format(png):fill(white):max_bytes(150000):strip_icc()/Metamask_logo-aca547fe6081482085662b03e2235f98.jpg" alt="metamask" />
      </div>
      <div className={classes['connection-buttons']}>
        {!account ? (
          <button onClick={connectWallet} disabled={connecting} className={classes.active}>
            {connecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        ) : (
          <div>
            <p className={classes.account}>Connected with MetaMask! Your address: {account}</p>
            <button onClick={disconnectWallet} className={classes.disconnect}>Disconnect Wallet</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
