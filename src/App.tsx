import React from 'react';
import Header from './components/header/Header';
import './App.css';
import { useAppSelector } from './redux/hooks';

function App() {
    const state = useAppSelector((state) => state.commonState.sideNaviOpen);

    return (
        <div className="App">
            <Header />
            <div>
                <div>{state ? 'true' : 'false'}</div>
            </div>
        </div>
    );
}

export default App;
