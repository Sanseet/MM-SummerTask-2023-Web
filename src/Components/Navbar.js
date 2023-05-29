import React from "react";
import Search from "./Search.jsx";
import axios from "axios";
import { useState } from "react";

import {
  AppBar,
  Tab,
  value,
  setValue,
  Tabs,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DrawerComp from "./DrawerComp";
const PAGES = ['Home',"Articles", "About", "Contact Us"];
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  let [newsData, setNewsData] = useState([]);
  let [query, setQuery] = useState("");
  let getNews = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&from=2023-04-27&sortBy=publishedAt&apiKey=c61a3bb6dadc41a2a4cd7aa7f35983ea
    `
      )
      .then((res) => {
        setNewsData(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
    <div>
      <AppBar sx={{ background: "black" ,display:'sticky'}}>
        <Toolbar>
          <NewspaperIcon sx={{ pt: 0, pl: 2, width: 38, height: 38 }}/>
          {isMatch ? (
            <>
              <Typography></Typography>
            </>
          ) : (
            <>
              <Tabs
                textColor="white"
                value={value}
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}
                sx={{ marginLeft: 20 }}
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
            </>
          )}
          <DrawerComp />
         
          <Button variant="contained" sx={{ marginLeft: "auto" }}>
            Admin
          </Button>

        </Toolbar>
      </AppBar>

    </div>
     </div>
  );
};

export default Navbar;
