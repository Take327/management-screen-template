import React from 'react';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import './App.css';
import { useAppSelector } from './redux/hooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/main/Home';
import Page1 from './components/main/Page1';
import Page2 from './components/main/Page2';

function App() {
    const state = useAppSelector((state) => state.commonState.sideNaviOpen);

    return (
        <div className="App">
            <Header />
            <Menu />
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/Page1/`} element={<Page1 />} />
                <Route path={`/Page2/`} element={<Page2 />} />
            </Routes>
        </div>
    );
}

export default App;
