import React, { useState } from 'react';
import {Drawer,Icon,IconButton,List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';const DrawerComp= () => {
  const [openDrawer,setopenDrawer] = useState(false)
  return (
  <React.Fragment>
    <Drawer open={openDrawer} onClose={()=>setopenDrawer(false)}>
    <List>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Login</ListItemText>
            </ListItemIcon>
        </ListItemButton>
    </List>
    </Drawer>
    <IconButton onClick={()=>setopenDrawer(!openDrawer)}>
      <MenuIcon />
    </IconButton>
  </React.Fragment>
  );
};

export default DrawerComp;
