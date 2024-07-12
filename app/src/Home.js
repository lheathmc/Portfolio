import React from 'react';
import {Box, Button, Typography} from "@mui/material";

const Home = () => {
    return (
        <Box>
            <Box width="100%" height="300" justifyContent={"center"}>
                <Typography sx={{marginTop:20}} variant='h1' textAlign={"center"}>Home</Typography>
            </Box>
            <Box display="flex" width="100%">
                <Typography margin='auto' variant='h4' color="black" textAlign={"center"}>Creating great user experiences</Typography>
            </Box>
            <Box width="100%" display="flex" justifyContent={"center"} margin="auto" marginTop={5}>
                <Button sx={{mr: 1}} variant='outlined'>Sign up</Button>
                <Button sx={{ml: 1}} variant='contained'>Sign with Google</Button>
            </Box>
        </Box>
    )
}

export default Home;