import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { useAppSelector, useAppDispatch } from "../hooks";
import { logout } from "../store/slices/authSlice";

export default function Header() {
  const { accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Healthcare Portal
        </Typography>
        <Link component={RouterLink} to="/" color="inherit" underline="none">
          <Button color="inherit">Home</Button>
        </Link>
        <Link
          component={RouterLink}
          to="/appointment"
          color="inherit"
          underline="none"
        >
          <Button color="inherit">Appointment</Button>
        </Link>
        <Link
          component={RouterLink}
          to="/about"
          color="inherit"
          underline="none"
        >
          <Button color="inherit">About</Button>
        </Link>
        {accessToken ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link
            component={RouterLink}
            to="/login"
            color="inherit"
            underline="none"
          >
            <Button color="inherit">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
