import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Project Management", to: "/project-management" },
  { label: "Commodities", to: "/commodities" },
  { label: "Our Agents", to: "/our-agents" },
  { label: "Our Strategy", to: "/our-strategy" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Quality Assurance", to: "/quality-assurance-compliance" },
  { label: "About us", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
];

export default function Header({ isDarkTheme, onToggleTheme }) {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActiveItem = (to) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname.toLowerCase().startsWith(to.toLowerCase());
  };

  const handleNavSelect = () => {
    handleClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(115deg, rgba(6, 21, 47, 0.94), rgba(14, 58, 110, 0.9))",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.22)",
        boxShadow: "0 14px 26px rgba(6, 18, 43, 0.24)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 0.5 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RouterLink to="/" style={{ textDecoration: "none", color: "inherit" }} onClick={handleNavSelect}>
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.1,
                px: 0.2,
                py: 0.2,
                borderRadius: 999,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: { xs: 180, md: 260 },
                  height: { xs: 70, md: 96 },
                  borderRadius: 0,
                  border: "none",
                  background: "transparent",
                  backdropFilter: "none",
                  boxShadow: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <Box
                  component="img"
                  src="/main-logo-tight.png"
                  alt="Khadesh Global logo"
                  sx={{
                    width: { xs: 360, md: 470 },
                    height: { xs: 138, md: 180 },
                    objectFit: "contain",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    transformOrigin: "center center",
                    filter: "drop-shadow(0 3px 10px rgba(0, 0, 0, 0.28))",
                  }}
                />
              </Box>
            </Box>
          </RouterLink>
        </Box>

        {isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton
              color="inherit"
              onClick={onToggleTheme}
              aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDarkTheme ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
            <IconButton
              color="inherit"
              onClick={handleOpen}
              aria-label="Open menu"
              aria-controls="main-navigation-menu"
              aria-expanded={Boolean(anchorEl)}
              aria-haspopup="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="main-navigation-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              keepMounted
              PaperProps={{
                sx: isDarkTheme
                  ? {
                      bgcolor: "#10233c",
                      color: "#e7f0ff",
                      border: "1px solid #35527a",
                    }
                  : undefined,
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  onClick={handleNavSelect}
                  selected={isActiveItem(item.to)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                onClick={handleNavSelect}
                sx={{
                  textTransform: "none",
                  px: 1.5,
                  py: 0.7,
                  borderRadius: 999,
                  fontWeight: 600,
                  color: "white",
                  border: "1px solid transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(246, 160, 0, 0.2)",
                    borderColor: "rgba(246, 160, 0, 0.76)",
                    transform: "translateY(-1px)",
                  },
                  "&.active": {
                    bgcolor: "rgba(246, 160, 0, 0.25)",
                    color: "secondary.main",
                    borderColor: "secondary.main",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton
              color="inherit"
              onClick={onToggleTheme}
              aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
              sx={{ border: "1px solid rgba(255,255,255,0.25)", ml: 0.5 }}
            >
              {isDarkTheme ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
