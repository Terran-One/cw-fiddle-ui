import { Grid } from "@mui/material";
import T1Drawer from "../common/T1Drawer";
import { CodeEditor } from "../editor/CodeEditor";

export interface ILayout {}

export default function Layout(props: ILayout) {
  return (
    <Grid item container direction="row" flex={1}>
      <T1Drawer barWidth={50} drawerWidth={250} />
      <Grid
        container
        component="main"
        direction="column"
        flex={1}
        sx={{
          p: 3,
          overflow: "hidden",
        }}
      >
        <CodeEditor />
      </Grid>
    </Grid>
  );
}
