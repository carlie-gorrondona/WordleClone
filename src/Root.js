import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Wordful from './Wordful';
import Home from './Home';

const Root = () => {
    return (
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='wordful' element={<Wordful />}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default Root