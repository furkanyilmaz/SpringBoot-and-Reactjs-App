import React, { useState, useEffect } from "react";
import { Paper, Button, Container, Grid } from "@mui/material";
export default function () {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/location/getAll")
      .then((res) => res.json())
      .then((result) => {
        setLocations(result);
      });
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Location List</h1>
      <Paper elevation={3} style={paperStyle}>
        {locations.map((location) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={location.id}
          >
            {/* Id:{location.id} */}
            <br />
            City: {location.city}
            <br />
            County: {location.county}
          </Paper>
        ))}
      </Paper>
      <Button a href="/" variant="contained">
        Home
      </Button>
    </Grid>
  );
}
