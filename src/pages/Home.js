import React from "react";
import { Container, Grid, Typography, Button, Slide } from "@mui/material";
import { useNavigate } from "react-router-dom";
import decisionImage from "../deciman.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("questions"); // Redirect to questions page
  };

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Slide direction="left" in={true} timeout={1000}>
            <Typography variant="h3" align="center" gutterBottom>
              Let AI and Users Guide Your Decisions
            </Typography>
          </Slide>
        </Grid>
        <Grid item>
          <Slide direction="up" in={true} timeout={1000}>
            <img
              src={decisionImage}
              alt="Decision Making"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
          </Slide>
        </Grid>
        <Grid item>
          <Slide direction="right" in={true} timeout={1000}>
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Get Started
            </Button>
          </Slide>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
