import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

const Portfolio = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box display={'flex'} flexDirection={isMatch?"column":"row"} padding={3} bgcolor="#efefef">
            <Typography variant='h1'>
              Portfolio
            </Typography>
        </Box>
    )
    }

export default Portfolio
