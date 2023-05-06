import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

const routing = (
    <Router>
        <React.StrictMode>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
            <Footer />
        </React.StrictMode>
    </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(routing);
