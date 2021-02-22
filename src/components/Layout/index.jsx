import React from 'react';
import Footer from '../Footer';
import Header from "../Header";

function Layout(props) {
    return(
        <React.Fragment>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;