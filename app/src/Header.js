import React,{useState} from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import DrawerComp from './DrawerComp';
import { CustomizedTypogrgaphy } from './styles/styles';
import {Link} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
   
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <React.Fragment>
                <AppBar sx={{background:"#2A7E83", boxShadow: "0", position:"fixed", top: 0}}>
                    <Toolbar>
                        <AppsIcon sx={{marginRight:'10px'}}/><CustomizedTypogrgaphy sx={{textColor:'inherit'}}><Link LinkComponent={Link} to="Home" className='logo'>LHeathMc</Link></CustomizedTypogrgaphy>
                        {isMatch ? (
                            <>
                                <DrawerComp></DrawerComp>
                            </>
                            ) : (
                                <>
                                    <Tabs value={value} onChange={(e, value)=> setValue(value)} LinkComponent={Link} role="navigation" className='site-navigation'>
                                        <Tab value="Portfolio" key="1" label="Portfolio" LinkComponent={Link} to="Portfolio"/>
                                        <Tab value="Case Studies" key="2" label="Case Studies" LinkComponent={Link} to="CaseStudies"/>
                                        <Tab value="Skillset" key="3" label="Skillset" LinkComponent={Link} to="Skillset"/>
                                        <Tab value="Contact Me" key="4" label="Contact Me" LinkComponent={Link} to="ContactMe"/>
                                    </Tabs>
                                    <Button sx={{marginLeft:'auto'}} variant='contained'>Login</Button>
                                </>
                                
                            )
                        }
                        
                    </Toolbar>
                    
                </AppBar>
            </React.Fragment>
        </div>
    )
}

export default Header;