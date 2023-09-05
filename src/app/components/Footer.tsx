// components/Footer.tsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{ textAlign: "center", mt: 4, py: 2, backgroundColor: "lightgray" }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Next.js App
      </Typography>
    </Box>
  );
};

export default Footer;
