import React from 'react';
import FooterComponent from '../Footer/FooterComponent';
import HeaderComponent from '../Header/HeaderComponent';

const LayoutComponent =({children}) =>{
    return(
        <>
        <HeaderComponent/>
        <main>{children}</main>
        <FooterComponent/>
        </>
    )
}

export default LayoutComponent;