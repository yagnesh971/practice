import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Checklist from './Checklist';
import Date from './Date';
function MyInfo() {
    return (
        <div className="main-container">
            <h1>Yagnesh Vullam</h1>
            <p>This is a paragraph about me..</p>
            <ul>
                <li>India</li>
                <li>Canada</li>
                <li>USA</li>
            </ul>
            <NavBar className="nav-container" />
            <MainContent className="content-container" />
            <Footer className="footer-container" />
            <Checklist className />
            <Date />
        </div>
    )
}
export default MyInfo;
