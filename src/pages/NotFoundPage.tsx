import { Box, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h3" gutterBottom>
        404
      </Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <Typography>The page you’re looking for doesn’t exist.</Typography>
    </Box>
  );
}
