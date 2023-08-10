import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '200px', xs: '65px' },
            ml: { sm: '50px' }
        }} position="relative" p="20px">
            <Typography color="#254699" fontWeight="750" fontSize="65px">
                Fitness Fiesta
            </Typography>
            <Typography fontWeight={650}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }} mb="23px" mt="15px"
            >
                Strive for <br />progress.
            </Typography>
            <Typography fontSize="30px" lineHeight="38px" mb={4} fontWeight={600} color='#db951a'>
                Browse for the most effective exercises <br/>personalized <span style={{textDecoration: 'italics'}}>just for you</span>
            </Typography>

            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#526b9c', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
            <Typography
                fontWeight={600}
                color="#287a8f"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' },
                    fontSize: '200px'
                }}
            >
                Workouts
            </Typography>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" width='100%' />
        </Box>
    )
}

export default HeroBanner