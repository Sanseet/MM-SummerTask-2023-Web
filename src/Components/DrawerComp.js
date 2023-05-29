import React, { useState } from "react";
import { Drawer, List, ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import IconButton from "@mui/material/IconButton/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const PAGES = ["Articles", "About", "Contact Us", "Login", "Logout"];
const DrawerComp = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setopenDrawer(false);
        }}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ margin: "auto", color: "white" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
