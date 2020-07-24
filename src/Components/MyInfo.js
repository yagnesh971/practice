import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Checklist from './Checklist';
import Date1 from './Date1';
import Tick from './Tick';
import Jokes from './Jokes'
import punchLines from './punchLines';


function MyInfo(props) {

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
            <Checklist className />
            <Date1 test="Hello"></Date1>
            <Footer className="footer-container" />
            <Tick />
            <Jokes />
            <punchLines />
        </div>
    )
}
export default MyInfo;
