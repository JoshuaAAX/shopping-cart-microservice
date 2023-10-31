import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FBB402", width: "100%", margin: "0 auto" }}
    >
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Logo
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="add to shopping cart"
          sx={{ mr: 2 }}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
