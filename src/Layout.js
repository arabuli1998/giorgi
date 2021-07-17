import React from 'react'
import Modals from './components/pages/Modals'
import Products from './components/pages/Products'
import Sidebar from './components/pages/Sidebar'
import Mai from './components/pages/Mai'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <Router>
                <Sidebar />
            
            <section>
                <Routes>
                        <Route path="Mai" element={<Mai />} />
                        <Route path="Products" element={<Products />} />
                </Routes>
                </section>
                </Router>
        </div>
    )
}

export default Layout
