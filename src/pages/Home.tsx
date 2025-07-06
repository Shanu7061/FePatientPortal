import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const healthInfo = [
  {
    title: "COVID-19 Updates",
    description:
      "Stay informed about the latest COVID-19 guidelines and vaccination information.",
  },
  {
    title: "Seasonal Flu Prevention",
    description:
      "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.",
  },
  {
    title: "Mental Health Awareness",
    description:
      "Explore resources and support options for maintaining good mental health.",
  },
];

export default function HomePage() {
  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>
        Latest Health Information
      </Typography>
      {healthInfo.map((item, idx) => (
        <Card key={idx} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{item.title}</Typography>
            <Typography>{item.description}</Typography>
            <Button variant="contained" sx={{ mt: 1 }}>
              Read More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
