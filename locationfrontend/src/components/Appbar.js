import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

export default function Appbar() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <AppBar position="static">
        <Grid>
          <Typography variant="h3">Fy</Typography>
          <Typography variant="h6">Spring Boot and React!!!</Typography>
        </Grid>
      </AppBar>
      <Button sx={{ mt: 2 }} variant="contained" a href="/add">
        add location
      </Button>
    </Grid>
  );
}
