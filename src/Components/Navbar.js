import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Draw from './DrawerComp';
const Navbar = () => {
    const [value,setValue] = useState();
  return (
  <React.Fragment>
    <AppBar sx={{background:"black"}}>
        <Toolbar>
        <Brightness5Icon/>
        <Tabs textColor='white' value={value} indicatorColor="secondary" onChange={(e,value)=>setValue(value)}>
        <Tab label="Home"/>
        <Tab label="Trending"/>
        <Tab label="About"/>
        <Tab label="Contact US"/>
        </Tabs>
        <Button sx={{marginLeft:"auto",background:"black",border:"solid 1px"}} variant="contained">Login</Button>
        <Button sx={{background:"black",border:"solid 1px",marginLeft:"10px"}}  variant="contained">Sign Up</Button>
        </Toolbar>
    </AppBar>
    <Draw/>
  </React.Fragment>
  )
}

export default Navbar;
