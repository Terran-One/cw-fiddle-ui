import HelpIcon from "@mui/icons-material/Help";
import GitHubIcon from "@mui/icons-material/GitHub";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import styled from "@mui/material/styles/styled";
import React from "react";
import Logo from "../Logo";

import DarkModeSwitch from "../DarkModeSwitch";
import EditorControls from "../editor/EditorControls";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer - 1,
}));

interface IT1AppBarProps {}

const T1AppBar = React.memo((props: IT1AppBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={7}>
            <Logo LinkComponent={IconButton} white />
          </Grid>
          <EditorControls />
        </Grid>
        <div>
          <Grid container alignItems="center">
            <DarkModeSwitch iconColors="white" />
            <IconButton>
              <HelpIcon sx={{ color: "#fff" }} />
            </IconButton>
            <Link
              href="https://github.com/Terran-One/cw-fiddle-ui"
              sx={{ display: "block" }}
            >
              <IconButton>
                <GitHubIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Link>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
});

export default T1AppBar;
