import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DrawerAppBar from "../components/DrawerAppBar";

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
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
