import React, { useState } from "react";
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const PAGES = ["Portfolio","Case Studies","Skillset","Contact Me","Login"];
    return(
        <React.Fragment>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <Box display={"flex"} padding={2}>
                    <AppsIcon sx={{marginRight:'10px'}}/><Typography>LHeathMc</Typography>
                </Box>
                
                <List sx={{minWidth:'300px'}}>
                    {
                        PAGES.map((page,index)=>(
                            <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{color: 'white',marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;