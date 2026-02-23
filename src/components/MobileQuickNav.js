import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

const actions = [
  { label: "Home", to: "/", icon: <HomeRoundedIcon /> },
  { label: "Commodities", to: "/commodities", icon: <Inventory2RoundedIcon /> },
  { label: "Contact", to: "/contact-us", icon: <MailRoundedIcon /> },
];

export default function MobileQuickNav() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(location.pathname);

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  if (!isMobile) {
    return null;
  }

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, to) => {
        setValue(to);
        navigate(to);
      }}
      className="mobile-quick-nav"
    >
      {actions.map((action) => (
        <BottomNavigationAction
          key={action.to}
          value={action.to}
          label={action.label}
          icon={action.icon}
        />
      ))}
    </BottomNavigation>
  );
}
