import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Breadcrumbs } from "@mui/material";
// import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import DrawerAppBar from "../components/DrawerAppBar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Layout() {
  return (
    <Box
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <DrawerAppBar />
      <Box style={{ flex: "1 0 auto", width: "100%" }}>
        <Container
          component="main"
          sx={{
            flexGrow: 1,
            paddingTop: "2rem",
            paddingBottom: "2rem",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          {/* <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs> */}
          {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}> */}
          <Outlet />
          {/* </Grid>
      </Grid> */}
        </Container>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}

export default Layout;
