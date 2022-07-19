import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Paper, Button, Grid } from "@mui/material";

export default function Location() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const location = { city, county };
    console.log(location);
    fetch("http://localhost:8080/location/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(location),
    }).then(() => {
      console.log("new location added..");
    });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Add Location</h1>
        <form
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ mb: 2 }}
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            sx={{ mt: 2 }}
            id="outlined-basic"
            label="County"
            variant="outlined"
            fullWidth
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />
        </form>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button sx={{ mt: 2 }} variant="contained" onClick={handleClick}>
            Add To DataBase
          </Button>
          <Button sx={{ mt: 2 }} variant="contained" a href="/getAll">
            Show Location list
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
}
