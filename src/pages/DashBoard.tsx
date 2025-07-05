import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { logout } from "../store";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box p={3}>
      <Typography variant="h4">Welcome, {user?.name}</Typography>
      <Button onClick={handleLogout} variant="contained">
        Logout
      </Button>
    </Box>
  );
}
