import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/HomePage/IndexHome';
import Footer from './Component/Footer/Footer';
import Defi from './Component/DefiPage/DefiPage';
import CreationPage from './Component/CreationPage/CreationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/defi" element={<Defi />} />
                <Route path="/creation" element={<CreationPage />} />
                <Route path="/contact" element={<CreationPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
);