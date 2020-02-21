import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import { useLocalStorage } from './hooks/useLocalStorage';
import { useDarkMode } from './hooks/useDarkMode';

import "./styles.scss";

const App = () => {
    const [coinData, setCoinData] = useState([]);
    //const test = useLocalStorage('dark-mode', false);
    const [testDarkMode, setTestDarkMode] = useDarkMode();
    let [dMode, setDMode] = useState('App');

    useEffect(() => {
        axios
        .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => setCoinData(res.data))
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        // console.log(test);
        console.log(testDarkMode);
        //console.log(testSetDarkMode);
        
        if(testDarkMode) {
            setDMode('dark-mode');
        } else {
            setDMode('App');
            //console.log('test');
        }
    }, [testDarkMode]);

    return (
        <div className={dMode}>
        <Navbar testDarkMode={testDarkMode} setTestDarkMode={setTestDarkMode}/>
        <Charts coinData={coinData} />
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
