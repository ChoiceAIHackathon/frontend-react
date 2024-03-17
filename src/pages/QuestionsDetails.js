import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  TextField,
} from "@mui/material";

const SliderPage = () => {
  const [leftButtonActive, setLeftButtonActive] = useState(false);
  const [rightButtonActive, setRightButtonActive] = useState(false);
  const [leftInputVisible, setLeftInputVisible] = useState(false);
  const [rightInputVisible, setRightInputVisible] = useState(false);
  const [leftInputValue, setLeftInputValue] = useState("");
  const [rightInputValue, setRightInputValue] = useState("");
  const [leftInputLabel, setLeftInputLabel] = useState("Pros");
  const [rightInputLabel, setRightInputLabel] = useState("Pros");

  const handleLeftBoxClick = () => {
    if (leftButtonActive || rightButtonActive) {
      setLeftInputVisible(true);
      setRightInputVisible(false);
      setLeftInputLabel(
        leftButtonActive
          ? "Write some Pros about 1st option"
          : "Write some Cons about 1st option"
      );
    }
  };

  const handleRightBoxClick = () => {
    if (leftButtonActive || rightButtonActive) {
      setRightInputVisible(true);
      setLeftInputVisible(false);
      setRightInputLabel(
        rightButtonActive
          ? "Write some Pros about 2nd option"
          : "Write some Cons about 2nd option"
      );
    }
  };

  const handleLeftButtonClick = () => {
    setLeftButtonActive(true);
    setRightButtonActive(false);
    setLeftInputVisible(false);
    setRightInputVisible(false);
    setLeftInputLabel("Pros");
  };

  const handleRightButtonClick = () => {
    setRightButtonActive(true);
    setLeftButtonActive(false);
    setLeftInputVisible(false);
    setRightInputVisible(false);
    setRightInputLabel("Pros");
  };

  const handleLeftInputChange = (event) => {
    setLeftInputValue(event.target.value);
  };

  const handleRightInputChange = (event) => {
    setRightInputValue(event.target.value);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" textAlign="center" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam?
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1" textAlign="center" gutterBottom>
                What's your preference?
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      backgroundColor: leftButtonActive ? "#1976d2" : "#e0e0e0",
                      color: leftButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
                      "&:hover": {
                        backgroundColor: leftButtonActive
                          ? "#1565c0"
                          : "#bdbdbd",
                      },
                    }}
                    onClick={handleLeftButtonClick}
                  >
                    Left Button
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      backgroundColor: rightButtonActive
                        ? "#1976d2"
                        : "#e0e0e0",
                      color: rightButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
                      "&:hover": {
                        backgroundColor: rightButtonActive
                          ? "#1565c0"
                          : "#bdbdbd",
                      },
                    }}
                    onClick={handleRightButtonClick}
                  >
                    Right Button
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Left Box"
                    onClick={handleLeftBoxClick}
                    style={{
                      width: "100%",
                      cursor:
                        leftButtonActive || rightButtonActive
                          ? "pointer"
                          : "default",
                      border:
                        leftInputVisible && leftButtonActive
                          ? "3px solid green"
                          : leftInputVisible && !leftButtonActive
                          ? "3px solid red"
                          : "none",
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Right Box"
                    onClick={handleRightBoxClick}
                    style={{
                      width: "100%",
                      cursor:
                        leftButtonActive || rightButtonActive
                          ? "pointer"
                          : "default",
                      border:
                        rightInputVisible && rightButtonActive
                          ? "3px solid green"
                          : rightInputVisible && !rightButtonActive
                          ? "3px solid red"
                          : "none",
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  {rightInputVisible && (
                    <TextField
                      label={rightInputLabel}
                      variant="outlined"
                      fullWidth
                      value={rightInputValue}
                      onChange={handleRightInputChange}
                      style={{
                        marginTop: "10px",
                        border: rightButtonActive
                          ? "2px solid green"
                          : "2px solid red",
                      }}
                    />
                  )}
                  {leftInputVisible && (
                    <TextField
                      label={leftInputLabel}
                      variant="outlined"
                      fullWidth
                      value={leftInputValue}
                      onChange={handleLeftInputChange}
                      style={{
                        marginTop: "10px",
                        border: leftButtonActive
                          ? "2px solid green"
                          : "2px solid red",
                      }}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent="center"
                    style={{ marginTop: "20px" }}
                  >
                    <Link
                      to="/profile"
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "10px" }}
                    >
                      Go Back
                    </Link>
                    <Link
                      to="/profile/new-question"
                      variant="contained"
                      color="secondary"
                    >
                      AI Summary
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

function QuestionsDetails() {
  return <SliderPage />;
}

export default QuestionsDetails;
