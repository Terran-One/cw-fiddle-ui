import React from "react";
import { Grid } from "@mui/material";
import "./App.css";
import T1AppBar from "./components/common/T1AppBar";
import T1Container from "./components/common/T1Container";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Grid
      container
      direction="column"
      width="100vw"
      height="100vh"
      className="T1App-root"
    >
      <T1AppBar />
      <Grid item flex={1} sx={{ display: "relative" }}>
        <T1Container>
          <Grid container width="100%" height="100%">
            {/* <Routes>
              <Route path="*" element={<VoidScreen />} />
            </Routes> */}
            <Layout />
          </Grid>
        </T1Container>
      </Grid>
    </Grid>
  );
}

export default App;
