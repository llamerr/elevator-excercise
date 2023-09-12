import AdbIcon from "@mui/icons-material/Adb";
import {
  AppBar,
  Box,
  Container,
  FormControlLabel,
  FormGroup, Link,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { forwardRef } from "react";
import { useDarkMode } from "usehooks-ts";

const Header = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <AppBar position="fixed" ref={ref}>
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

          <Box sx={{ flexGrow: 0, mx: 2 }}>
            <Link href={`${window.location.href}/storybook`} target="_blank">DOCS</Link>
          </Box>

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
});

export default Header;
