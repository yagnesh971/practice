import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import MainContent from './MainContent';
function MyInfo() {
    return (
        <div>
            <h1>Yagnesh Vullam</h1>
            <p>This is a paragraph about me..</p>
            <ul>
                <li>India</li>
                <li>Canada</li>
                <li>USA</li>
            </ul>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}
export default MyInfo;