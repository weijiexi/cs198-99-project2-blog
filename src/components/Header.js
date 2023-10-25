import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderStyle>
            <p>Blog Pro</p>
            <MenuStyle>
                <li><Link to="/">Login</Link></li>
                <li><Link to="view">View</Link></li>
                <li><Link to="logout">Logout</Link></li>
            </MenuStyle>
        </HeaderStyle>
    );
}

export default Header;

const HeaderStyle = styled.div`
    padding: 5px 0px 5px 25px;
    background: linear-gradient(120deg, #0680F2,#06CEF2, #0464BE, #0464BE);
    display:flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'DM Sans', sans-serif;
        // font-weight: bold;
        font-size: 1.5em;
        color:#FDFEFE;
    }
`

const MenuStyle = styled.ul`
  li {
        display: inline-block;
        padding: 0.1rem 1rem;
        
        a {
            text-decoration: none;
            color: #FDFEFE;
            font-family: 'DM Sans', sans-serif;
            font-size: 1em;
        }
    }
`