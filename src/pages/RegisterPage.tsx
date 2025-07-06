import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { register } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await dispatch(register({ username, email, password }));
    if (register.fulfilled.match(res)) navigate("/login");
  };

  return (
    <Box p={3} maxWidth={400} mx="auto">
      <Typography variant="h5">Register</Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Register
      </Button>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <p>Already have an account?</p>
        <Link to="/register">Go to login!</Link>
      </Stack>
    </Box>
  );
}
