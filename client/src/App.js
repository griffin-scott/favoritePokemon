
import { React, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";

import context from "./context/context";

const App = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("http://localhost:8000/api/status");
        const resData = await res.json();
        console.log(resData);
        setData(resData);
    };

    useEffect(() => {
        getData();
    }, []);

    const { Provider } = context;

    return (
        <Provider value={data}>
            <BrowserRouter>
                <div className="App d-flex flex-column h-100 lead bg-dark">
                    {/* <Navbar /> */}
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
