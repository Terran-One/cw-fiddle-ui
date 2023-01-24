import { Grid } from "@mui/material";
import T1Drawer from "../common/T1Drawer";
import { CodeEditor } from "../editor/CodeEditor";
import { ReactNode } from "react";
import styled from "@mui/material/styles/styled";
import { GridSizeProps } from "../../utils/typeUtils";
import useTheme from "@mui/material/styles/useTheme";
import T1Container from "../common/T1Container";
import EditorNav from "../editor/EditorNav";
import Paper from "@mui/material/Paper";
import Console from "../console/Console";

export interface ILayout {}

export default function Layout(props: ILayout) {
  return (
    <Grid item container direction="row" flex={1}>
      <T1Drawer barWidth={50} drawerWidth={250} />
      <Grid
        container
        component="main"
        direction="row"
        flex={1}
        sx={{
          p: 2,
          overflow: "hidden",
        }}
      >
        <SplitView className="T1Fiddle-root">
          <Column xs={8} className="T1Fiddle-left">
            <T1Container>
              <EditorNav />
              <CodeEditor />
            </T1Container>
          </Column>
          <Column xs={4} className="T1Fiddle-right">
            <T1Container>
              <Console />
            </T1Container>
          </Column>
        </SplitView>
      </Grid>
    </Grid>
  );
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
}));

interface ISplitViewProps {
  children?: ReactNode;
  className?: string;
}

function SplitView({ children, ...props }: ISplitViewProps) {
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      sx={{
        height: "100%",
      }}
      {...props}
    >
      {children}
    </Grid>
  );
}

interface IColumnProps extends GridSizeProps {
  children?: ReactNode;
  className?: string;
}

function Column({ children, ...props }: IColumnProps) {
  const theme = useTheme();

  return (
    <Grid
      item
      {...props}
      sx={{
        height: "100%",
      }}
    >
      <Grid
        container
        direction="column"
        component={StyledPaper}
        sx={{
          height: "100%",
          overflow: "auto",
          "> .T1Widget-root:not(:first-of-type)": {
            borderTop: `1px solid ${theme.palette.line}`,
          },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
