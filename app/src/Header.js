import React,{useState} from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme, Link } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import DrawerComp from './DrawerComp';
import { CustomizedTypogrgaphy } from './styles/styles';
import { Route, Routes, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link'

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const linkArr = ["Portfolio","Case Studies","Skillset","Contact Me"];
   
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    // console.log(theme);
    // console.log(isMatch);
    return (
        <div>
            <React.Fragment>
                <AppBar sx={{background:"#2A7E83", boxShadow: "0", position:"fixed", top: 0}}>
                    <Toolbar>
                        <AppsIcon sx={{marginRight:'10px'}}/><CustomizedTypogrgaphy sx={{textColor:'inherit'}}><Link href="/">LHeathMc</Link></CustomizedTypogrgaphy>
                        {isMatch ? (
                            <>
                                <DrawerComp></DrawerComp>
                            </>
                            ) : (
                                <>
                                    {/* <Tabs 
                                    sx={{marginLeft:'10px'}} 
                                    textColor="inherit" 
                                    value={value} 
                                    onChange={(e, value)=> setValue(value)} 
                                    indicatorColor='secondary'>
                                        {
                                            linkArr.map((link,index)=>(
                                                <Tab
                                                key={index} 
                                                label={link} 
                                                LinkComponent={Link} 
                                                to={`/${link === "home" ? "" : link}`}/>
                                            ))
                                        }
                                    </Tabs> */}
                                    <Tabs value={value} onChange="" role="navigation">
                                        <Tab value="Portfolio" key="1" label="Portfolio" LinkComponent={Link} href="/Portfolio"/>
                                        <Tab value="Case Studies" key="2" label="Case Studies" LinkComponent={Link} href="/CaseStudies"/>
                                        <Tab value="Skillset" key="3" label="Skillset" LinkComponent={Link} href="/Skillset"/>
                                        <Tab value="Contact Me" key="4" label="Contact Me" LinkComponent={Link} href="/ContactMe"/>
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