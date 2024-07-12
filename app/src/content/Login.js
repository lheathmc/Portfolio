import React, {useState} from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        password:"",
    });
    const handleChange = (e) => {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }
    const resetState = () =>{
        setIsSignUp(!isSignUp);
        setInputs({name:'', email:'', password:''});
    }
    //console.log(isSignUp);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box 
                    display="flex" 
                    flexDirection={"column"} 
                    maxWidth={400} 
                    margin="auto"
                    marginTop={15}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'3px 3px 10px #ccc'}
                    sx={{
                        ":hover":{
                        boxShadow:'1px 1px 5px #ccc',
                        backgroundColor:'#f9f9f9'
                    }}}
                    alignItems="center"
                    justifyContent={"center"}>
                    <Typography variant="h2" padding={3} textAlign={"center"} fontSize={{lg:42, md:38, sm:34, xs:28}}>
                        {isSignUp ? "Sign up" : "Login"}
                    </Typography>
                    {isSignUp && (
                        <TextField margin="dense" fullWidth type={'text'} variant="outlined" placeholder="Name" name="name" value={inputs.name} onChange={handleChange}/>
                    )}
                    
                    <TextField margin="dense" fullWidth type={'email'} variant="outlined" placeholder="Email" name="email" value={inputs.email} onChange={handleChange}/>
                    <TextField margin="dense" fullWidth type={'password'} variant="outlined" placeholder="Password" name="password" value={inputs.password} onChange={handleChange}/>
                    <Button startIcon={isSignUp ? <HowToRegIcon/> : <LoginIcon/>} type="submit" variant="contained" color="primary" sx={{marginTop:2}}>
                        {isSignUp ? "Sign up" : "Login"}
                    </Button>
                    <Button startIcon={isSignUp ? <LoginIcon/> : <HowToRegIcon/>} onClick={resetState} variant="text" color="primary" sx={{marginTop:2}}>
                       {isSignUp ? "Login" : "Sign up"}
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Login;