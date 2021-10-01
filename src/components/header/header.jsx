import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

// Firebase
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div style={{ width: "100%" }}>
    <Box
      sx={{
        display: "flex",
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
          Stardew Planner
        </Link>
      </Box>
      {currentUser ? (
        <Box sx={{ display: "flex" }}>
          <Box sx={{ p: 2 }}>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/crops"
            >
              Crops
            </Link>
          </Box>
          <Box sx={{ p: 2 }} onClick={() => auth.signOut()}>
            Sign Out
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/signin"
          >
            <Box sx={{ p: 2 }}>Sign In</Box>
          </Link>
        </Box>
      )}
    </Box>
  </div>
);

export default Header;
