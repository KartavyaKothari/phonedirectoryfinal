import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Header = (props)=>{
    const headerStyle = {
        textAlign: 'center',
        padding: 20,
        background: '#000',
        color: '#fff',
        textTransform: 'uppercase'
    };

    return (
        <div className="header" style={headerStyle}>
            {props.headerText}
        </div>
    );
}

Header.defaultProps = {
    headerText: "Phone directory"
}

export default Header;