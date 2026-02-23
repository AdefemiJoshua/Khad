import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        mt: 6,
        color: "#fff",
        background: "linear-gradient(145deg, #06152f, #0a214e)",
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 -10px 30px rgba(6, 18, 43, 0.2)",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: 2, textAlign: 'center' }}>
        <Box className="trust-strip">
          <span className="trust-label">Trusted With</span>
          <img src="/nepc.png" alt="NEPC partner logo" />
          <img src="/thirza.png" alt="Thirza partner logo" />
          <img src="/tridge.png" alt="Tridge partner logo" />
        </Box>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
          © {new Date().getFullYear()} Khadesh Global. All rights reserved.
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1.2, color: "rgba(255,255,255,0.7)" }}>
          <Link component={RouterLink} to="/contact-us" underline="hover" sx={{ color: "#f6a000" }}>
            Contact
          </Link>{' '}
          &nbsp;|&nbsp;{' '}
          <Link component={RouterLink} to="/" underline="hover" sx={{ color: "#f6a000" }}>
            Home
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
