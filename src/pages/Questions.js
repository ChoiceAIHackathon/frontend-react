import { useState, useReducer } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  Box,
  TextField,
} from "@mui/material";

const initialState = {
  leftButtonActive: false,
  rightButtonActive: false,
  leftInputBorderColor: "gray",
  rightInputBorderColor: "gray",
  leftInputValue: "",
  rightInputValue: "",
  leftInputLabel: "",
  rightInputLabel: "",
  leftImageColor: "grayscale(100%)",
  rightImageColor: "grayscale(100%)",
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_LEFT":
      return {
        ...state,
        leftButtonActive: true,
        rightButtonActive: false,
        leftInputBorderColor: "green",
        rightInputBorderColor: "red",
        leftImageColor: "initial",
        rightImageColor: "grayscale(100%)",
        leftInputLabel: "Add pros for box one",
        rightInputLabel: "Add cons for box two",
      };
    case "SELECT_RIGHT":
      return {
        ...state,
        rightButtonActive: true,
        leftButtonActive: false,
        rightInputBorderColor: "green",
        leftInputBorderColor: "red",
        rightImageColor: "initial",
        leftImageColor: "grayscale(100%)",
        leftInputLabel: "Add cons for box one",
        rightInputLabel: "Add pros for box two",
      };
    case "INPUT_CHANGE":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

const SliderPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLeftBoxClick = () => {
    dispatch({ type: "SELECT_LEFT" });
  };

  const handleRightBoxClick = () => {
    dispatch({ type: "SELECT_RIGHT" });
  };

  const handleInputChange = (event) => {
    dispatch({
      type: "INPUT_CHANGE",
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <Typography variant="body1" textAlign="center" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam?
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Left Box"
                  onClick={handleLeftBoxClick}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    border: state.leftButtonActive
                      ? "3px solid green"
                      : "3px solid #ccc",
                    filter: state.leftImageColor,
                  }}
                />
                <Typography variant="body1" textAlign="center">
                  Option1
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={state.leftInputLabel}
                  variant="outlined"
                  fullWidth
                  name="leftInputValue"
                  value={state.leftInputValue}
                  onChange={handleInputChange}
                  style={{
                    border: `2px solid ${state.leftInputBorderColor}`,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Right Box"
                  onClick={handleRightBoxClick}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    border: state.rightButtonActive
                      ? "3px solid green"
                      : "3px solid #ccc",
                    filter: state.rightImageColor,
                  }}
                />
                <Typography variant="body1" textAlign="center">
                  Option2
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label={state.rightInputLabel}
                variant="outlined"
                fullWidth
                name="rightInputValue"
                value={state.rightInputValue}
                onChange={handleInputChange}
                style={{
                  border: `2px solid ${state.rightInputBorderColor}`,
                }}
              />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

function Questions() {
  return <SliderPage />;
}

export default Questions;
