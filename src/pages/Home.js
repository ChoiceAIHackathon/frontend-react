import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("questions"); // Redirect to
  };
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3" align="center" gutterBottom>
            Let AI and Users Guide Your Decisions
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
