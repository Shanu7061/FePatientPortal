import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import instance from "../utils/axios";

const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Lee"];
const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

export default function AppointmentPage() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  const handleBooking = async () => {
    if (!doctor || !date || !time || !reason) {
      alert("Please fill all the required fields");
      return;
    }
    try {
      await instance.post("/appointments", {
        doctor,
        date,
        time,
        reason,
        notes,
      });
      setDate("");
      setDoctor("");
      setTime("");
      setReason("");
      setNotes("");
    } catch (e) {
      alert("Opps! Something went wrong");
      console.log(e);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={2}>
        Book an Appointment
      </Typography>
      <TextField
        fullWidth
        select
        label="Select Doctor"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        sx={{ mb: 2 }}
        required
      >
        {doctors.map((doc) => (
          <MenuItem key={doc} value={doc}>
            {doc}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        type="date"
        label="Select Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{ mb: 2 }}
        InputLabelProps={{ shrink: true }}
        required
      />
      <Box mb={2}>
        <Typography>Available Time Slots*:</Typography>
        <Grid container spacing={1} mt={1}>
          {timeSlots.map((slot) => (
            <Grid item key={slot}>
              <Button
                variant={slot === time ? "contained" : "outlined"}
                onClick={() => setTime(slot)}
              >
                {slot}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <TextField
        fullWidth
        label="Reason for Visit"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        sx={{ mb: 2 }}
        required
      />
      <TextField
        fullWidth
        label="Additional Notes (Optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleBooking}>
        Confirm Booking
      </Button>
    </Box>
  );
}
