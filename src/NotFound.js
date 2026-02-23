import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Box sx={{ minHeight: "70vh", display: "grid", placeItems: "center", p: 3 }}>
      <Box sx={{ textAlign: "center", maxWidth: 560 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "primary.main" }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mt: 1, mb: 1.2, fontWeight: 700 }}>
          Page not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2.5 }}>
          The page you requested does not exist or may have moved.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained">
          Back to Home
        </Button>
      </Box>
    </Box>
  );
}
