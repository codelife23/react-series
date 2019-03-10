import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

const HomePage = () => (
    <div>
        <Header />
        <div className="wrapper">
            <div className="structure">
                <div className="aside-here">
                    <Aside />
                </div>
                <div className="content-here">
                    <div className="content">
                        Home page of my App!
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default HomePage;