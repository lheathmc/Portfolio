import React, { useState } from "react";
import { Box, Drawer, Button, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomizedTypogrgaphy } from './styles/styles';
import {Link} from "react-router-dom";

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return(
        <React.Fragment>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <Box display={"flex"} padding={2}>
                    <AppsIcon sx={{marginRight:'10px'}}/><CustomizedTypogrgaphy sx={{textColor:'inherit'}}>LHeathMc</CustomizedTypogrgaphy>
                </Box>
                
                <List sx={{minWidth:'300px'}}>

                <ListItemButton onClick={()=> setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText><Link to="Home">Home</Link></ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                    <ListItemButton onClick={()=> setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText><Link to="Portfolio">Portfolio</Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={()=> setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText><Link to="CaseStudies">Case Studies</Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={()=> setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText><Link to="Skillset">Skillset</Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={()=> setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText><Link to="ContactMe">Contact Me</Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
                <Button sx={{margin:'auto'}} variant='contained'>Login</Button>
            </Drawer>
            <IconButton sx={{color: 'white',marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;