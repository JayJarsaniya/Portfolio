import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setDrawerOpen(false);
  };

  const NavLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  }));

  const SidebarList = styled(List)(({ theme }) => ({
    width: "250px",
    backgroundColor: "#0a101e",
    height: "100%",
    color: "#fff",
  }));

  const SidebarItem = styled(ListItemButton)(({ theme }) => ({
    "&:hover": {
      backgroundColor: "#333",
    },
  }));

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#0a101e8f", padding: "0px 50px" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              <span style={{ color: "#FFD700" }}>J</span>
              <span style={{ color: "#FFFFFF" }}>AY</span>
            </Typography>
          </Box>

          <NavLinks>
            {[
              { text: "HOME", path: "/" },
              { text: "ABOUT", path: "/about" },
              { text: "RESUME", path: "/resume" },
              { text: "PROJECTS", path: "/projects" },
              { text: "CONTACT", path: "/contact" },
            ].map(({ text, path }, index) => (
              <Link
                to={path}
                key={index}
                style={{
                  textDecoration: "none",
                  color: activeLink === path ? "#FFD700" : "#fff",
                }}
                onClick={() => handleLinkClick(path)}
              >
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  {text}
                </Typography>
              </Link>
            ))}
            <a
              href="tel:+91 9737529450"
              style={{ textDecoration: "none", color: "#FFD700", fontSize: "14px" }}
            >
              <Typography variant="body1">+91 9737529450</Typography>
            </a>
          </NavLinks>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <SidebarList>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              padding: "1rem 0",
              fontWeight: "bold",
              backgroundColor: "#0a101e",
              color: "#FFD700",
              borderBottom: "1px solid #fff",
            }}
          >
            JAY JARSANIYA
          </Typography>
          <Divider sx={{marginTop:"20px"}} />
          {[
            { text: "HOME", path: "/" },
            { text: "ABOUT", path: "/about" },
            { text: "RESUME", path: "/resume" },
            { text: "PROJECTS", path: "/projects" },
            { text: "CONTACT", path: "/contact" },
          ].map(({ text, path }, index) => (
            <Link
              to={path}
              key={index}
              style={{
                textDecoration: "none",
                color: activeLink === path ? "#FFD700" : "#fff",
              }}
              onClick={() => handleLinkClick(path)}
            >
              <SidebarItem>
                <ListItemText
                  primary={text}
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                />
              </SidebarItem>
            </Link>
          ))}
          <Divider />
          <Box sx={{ textAlign: "center", padding: "1rem", color: "#FFD700" }}>
            <a href="tel:+91 9737529450" style={{ textDecoration: "none", color: "#FFD700" }}>
              <Typography variant="body1">+91 9737529450</Typography>
            </a>
          </Box>
        </SidebarList>
      </Drawer>
    </>
  );
};

export default Navbar;
