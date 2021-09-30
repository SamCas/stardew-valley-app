import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div style={{ width: "100%" }}>
    <Box sx={{ display: "flex", bgcolor: "primary.main" }}>
      <Box sx={{ p: 2, flexGrow: 1 }}>Item 1</Box>
      <Box sx={{ p: 2 }}>Item 2</Box>
      <Box sx={{ p: 2 }}>Item 3</Box>
    </Box>
  </div>
);

export default Header;

/* <div className="main-container">
    <div className="header">
      <Link className="logo-container" to="/">
        <SvgIcon component={StarIcon} sx={{ m: 1, bgcolor: "secondary.main" }}>
        </SvgIcon>
      </Link>
      <div className="options">
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  </div> */
