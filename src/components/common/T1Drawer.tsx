import NoteAddIcon from "@mui/icons-material/NoteAdd";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";
import React, { MouseEvent, ReactNode, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../configs/theme";
import { ProjectSubMenu } from "../submenu/ProjectSubMenu";
import { GithubSubMenu } from "../submenu/GithubSubMenu";

export type SubMenu = "project" | "github";

export interface IT1Drawer {
  barWidth?: number;
  drawerWidth?: number;
}

const T1Drawer = (props: IT1Drawer) => {
  const { barWidth = 50, drawerWidth = 250 } = props;
  const [menu, setMenu] = useState<SubMenu | undefined>("project");

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerBar width={barWidth}>
        <MenuIconButton
          menu="project"
          Icon={NoteAddIcon}
          setMenu={setMenu}
          tooltip="Project"
        />
        <MenuIconButton
          menu="github"
          Icon={GitHubIcon}
          setMenu={setMenu}
          tooltip="Github"
        />
      </DrawerBar>
      <SubMenu width={drawerWidth} menu={menu} />
    </Box>
  );
};

export default T1Drawer;

interface ISubMenuProps {
  menu: SubMenu | undefined;
  width: number;
}

function SubMenu({ menu, width }: ISubMenuProps) {
  const contents = (() => {
    switch (menu) {
      case "project":
        return <ProjectSubMenu />;
      case "github":
        return <GithubSubMenu />;
      default:
        return null;
    }
  })();

  return <Drawer width={width}>{contents}</Drawer>;
}

interface IDrawerBar {
  children?: ReactNode;
  width: number;
}

const DrawerBar = React.forwardRef<HTMLDivElement | null, IDrawerBar>(
  ({ children, width }, ref) => {
    const theme = useTheme();

    return (
      <Paper
        ref={ref}
        sx={{
          width,
          height: "100%",
          border: 0,
          borderRadius: 0,
          borderRight: `1px solid ${theme.palette.line}`,
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          height="100%"
          sx={{
            pt: 1,
            pb: 1,
          }}
        >
          {children}
        </Grid>
      </Paper>
    );
  }
);

interface ICustomDrawer {
  children?: ReactNode;
  width: number;
}

function Drawer({ children, width }: ICustomDrawer) {
  const theme = useTheme();

  return (
    <Paper
      component="nav"
      sx={{
        height: "100%",
        top: 0,
        left: "100%",
        width,
        boxSizing: "border-box",
        border: 0,
        borderRadius: 0,
        borderRight: `1px solid ${theme.palette.line}`,
      }}
    >
      {children}
    </Paper>
  );
}

interface IMenuIconButtonProps {
  menu: SubMenu;
  tooltip?: string;
  Icon: React.ElementType<{}>;
  setMenu(setter: (curr: SubMenu | undefined) => SubMenu | undefined): void;
  onClick?(e: MouseEvent): void;
}

function MenuIconButton({
  menu,
  tooltip,
  setMenu,
  Icon,
  onClick: _onClick,
}: IMenuIconButtonProps) {
  const onClick = useCallback(
    (e: MouseEvent) => {
      _onClick?.(e);
      if (!e.isDefaultPrevented()) {
        setMenu((curr) => (curr !== menu ? menu : undefined));
      }
    },
    [menu, _onClick]
  );

  return (
    <Tooltip title={tooltip} placement="right">
      <IconButton onClick={onClick}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
