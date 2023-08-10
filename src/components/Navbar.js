import React from 'react';
import { Link } from 'react-router-dom';
import { Stack,Box } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    return (
        
        <Stack direction="row"  justifyContent="space-around" sx={{gap:{sm:'110px', xs:'40px'},mt:{sm:'10px',xs:'8px'},
        justifyContent:'none' }} flexWrap="wrap" px="40px">
            <Link to="/">
                <img src={Logo} alt="logo" style={{
                    width: '48px', height: '48px', margin: '0 20px'
                }}
                />
            </Link>

            <Stack
                direction="row"
                gap="40px"
                fontFamily="Alegreya"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link to="/" style={{ textDecoration: 'none', color: '#12373A', borderBottom: '3px solid #287A8F' }}>Home</Link>
                <a href="#exercises" style={{ textDecoration: 'none', color: '#12373A' }}>Exercises</a>
            </Stack>
        </Stack>

    )
}

export default Navbar