import React from "react";
import { Grid, Typography } from "@mui/material";
const Console = () => {
  return (
    <Grid container sx={{ background: "black", height: "100%" }}>
      <Grid container sx={{ p: 1 }}>
        <Typography color="green">Logs will appear here</Typography>
      </Grid>
    </Grid>
  );
};

export default Console;
