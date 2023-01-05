import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import Nav from '../components/templates/Nav'
import Home from '../pages/Home'
import Empresa from '../pages/Empresa'
import Contato from '../pages/Contato'

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Nav />
                <Route exact path="/" element={<Home />} />
                <Route path="/empres" element={<Empresa />}>
                    <Empresa />
                </Route>
                <Route exact path="/">
                    <Contato />
                </Route>
            </Routes>
        </Router>
    )
}