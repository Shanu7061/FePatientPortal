import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.auth);

  const handleSubmit = async () => {
    const res = await dispatch(login({ email, password }));
    if (login.fulfilled.match(res)) navigate("/dashboard");
  };

  return (
    <Box p={3} maxWidth={400} mx="auto">
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
}
