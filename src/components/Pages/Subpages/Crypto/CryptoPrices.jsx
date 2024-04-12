import React, { useState, useEffect } from 'react';
import { FcCurrencyExchange } from "react-icons/fc";
import { GrCurrency } from "react-icons/gr";
import { MdOutlineDescription } from "react-icons/md";
import classes from './CryptoPrices.module.css';

export default function CryptoPrices() {
    const [values, setValues] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const currencyData = data.bpi;
                const currencyArray = Object.keys(currencyData).map(currency => ({
                    code: currency,
                    rate: currencyData[currency].rate,
                    description: currencyData[currency].description
                }));
                setValues(currencyArray);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        getData();
    }, []);
    // console.log(values);

    return (
        <>
            <h2 className={classes['crypto-page-heading']}>Cryptocurrency Prices</h2>
            <div className={classes['currency-container']}>
            {
                values.map((index, idx) => (
                    <div key={idx} className={classes['value-card']}>
                        <p className={classes.code}><FcCurrencyExchange size={'1.5rem'}/><span className={classes.value}>{index.code}</span></p>
                        <p className={classes.description}><MdOutlineDescription size={'1.5rem'}/><span className={classes.value}>{index.description}</span></p>
                        <p className={classes.rate}><GrCurrency size={'1.5rem'}/><span className={classes.value}>{index.rate}</span></p>
                    </div>
                ))
            }
            </div>
        </>
    );
}
