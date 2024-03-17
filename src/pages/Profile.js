import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const QuestionList = () => {
  // Array of hardcoded questions
  const questions = [
    "What is the meaning of life?",
    "How does gravity work?",
    "What are the benefits of exercise?",
    "Why is the sky blue?",
    "How does the internet work?",
  ];

  return (
    <div>
      <Grid container spacing={2}>
        {questions.map((question, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body1">{question}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Button
          component={Link}
          to="/questions"
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          View All Questions
        </Button>
        <Button
          component={Link}
          to="/profile/new-question"
          variant="contained"
          color="secondary"
        >
          Add New Question
        </Button>
      </Grid>
    </div>
  );
};

function Profile() {
  return (
    <>
      <div>Profile</div>
      <QuestionList />
    </>
  );
}

export default Profile;
