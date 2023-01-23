import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

const EditorControls = () => {
  return (
    <Grid item xs={5} sx={{ display: "flex", alignItems: "center", p: 1 }}>
      <Button variant="contained" endIcon={<PlayArrowIcon fontSize="large" />}>
        RUN
      </Button>
    </Grid>
  );
};

export default EditorControls;
