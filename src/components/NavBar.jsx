import React, { Component } from 'react';

function NavBar(){
    var borderStyle = {
        border: '2px solid  #e6e6e6',
        borderCollapse: 'collapse',
        padding: '15',
        color: '#737373',
        display: 'inline'
    }

    var borderOutline = {
        border: '2px solid  #e6e6e6',
        borderCollapse: 'collapse',
        padding: '15',
        color: '#737373',
        display: 'inline'
    }

    var hrStyle = {
        border: '1px solid #e6e6e6'
    }

    var searchBox = {
        // float: 'right',
        textAlign: 'right',
        border: '2px solid black',
        // marginLeft: '1000px',
    }


    return (
        <div>
                    <td style={borderStyle}>Home</td>
                    <td style={borderStyle}>Notifications</td> 
                    <td style={borderStyle}>Messeges</td>
                    <p style={searchBox}>Search</p>
            <hr style={hrStyle} />
        </div>
    );
}

export default NavBar;