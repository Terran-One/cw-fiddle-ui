import React from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Grid } from "@mui/material";
const EditorNav = () => {
  const [lang, setLang] = React.useState("javascript");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
      }}
    >
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
          <Select
            id="lang-select"
            value={lang}
            inputProps={{ "aria-label": "Without label" }}
            onChange={handleChange}
          >
            <MenuItem value="javascript">Javascript</MenuItem>
            <MenuItem value="assembly">AssemblyScript</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Paper>
  );
};

export default EditorNav;
