import { Card, CardContent, CardMedia, Typography } from "@mui/material";

/**
 * Displays Education Card containing info and an image of the school.
 */
export default function EducationCard({ education }) {
  return (
    <Card sx={{ display: "flex", flexDirection: "row" }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5">
          {education.title}
        </Typography>
        <Typography variant="subtitle1">{education.degree}</Typography>
        <Typography variant="body1" color="text.secondary">
          {education.date}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 145, display: { xs: "none", sm: "block" } }}
        image={education.image}
        alt={education.imageLabel}
      />
    </Card>
  );
}
