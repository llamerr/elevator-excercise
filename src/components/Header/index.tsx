import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useDarkMode } from "usehooks-ts";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function Header() {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={isDarkMode}
                    onChange={toggle}
                    aria-label="login switch"
                  />
                }
                label={isDarkMode ? "Dark Mode" : "Light Mode"}
              />
            </FormGroup>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
