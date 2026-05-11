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
  // Treat laptop widths as "compact" to avoid nav items wrapping/scattering.
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isWideDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMoreOpen = (event) => {
    setMoreAnchorEl(event.currentTarget);
  };
  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

  const isActiveItem = (to) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname.toLowerCase().startsWith(to.toLowerCase());
  };

  const handleNavSelect = () => {
    handleClose();
    handleMoreClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const primaryNavItems = [
    { label: "Home", to: "/" },
    { label: "Project Management", to: "/project-management" },
    { label: "Commodities", to: "/commodities" },
    { label: "About us", to: "/about-us" },
    { label: "Contact Us", to: "/contact-us" },
  ];

  const secondaryNavItems = navItems.filter(
    (item) => !primaryNavItems.some((primaryItem) => primaryItem.to === item.to)
  );

  const isSecondaryActive = secondaryNavItems.some((item) => isActiveItem(item.to));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background:
          "linear-gradient(110deg, rgba(223, 236, 255, 0.92) 0%, rgba(248, 244, 236, 0.94) 100%)",
        color: "#0a214e",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(10, 33, 78, 0.16)",
        boxShadow: "0 10px 20px rgba(10, 33, 78, 0.12)",
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
            {(isWideDesktop ? navItems : primaryNavItems).map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                onClick={handleNavSelect}
                sx={{
                  textTransform: "none",
                  px: { lg: 1.1, xl: 1.5 },
                  py: 0.65,
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: { lg: "0.9rem", xl: "0.95rem" },
                  color: "#0a214e",
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

            {!isWideDesktop ? (
              <>
                <Button
                  onClick={handleMoreOpen}
                  aria-controls="desktop-more-menu"
                  aria-haspopup="menu"
                  aria-expanded={Boolean(moreAnchorEl)}
                  sx={{
                    textTransform: "none",
                    px: { lg: 1.1, xl: 1.5 },
                    py: 0.65,
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: { lg: "0.9rem", xl: "0.95rem" },
                    color: "#0a214e",
                    border: "1px solid transparent",
                    bgcolor: isSecondaryActive ? "rgba(246, 160, 0, 0.25)" : "transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(246, 160, 0, 0.2)",
                      borderColor: "rgba(246, 160, 0, 0.76)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  More
                </Button>
                <Menu
                  id="desktop-more-menu"
                  anchorEl={moreAnchorEl}
                  open={Boolean(moreAnchorEl)}
                  onClose={handleMoreClose}
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
                  {secondaryNavItems.map((item) => (
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
              </>
            ) : null}
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
