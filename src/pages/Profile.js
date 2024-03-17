import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "https://choiceai.cyclic.app/api/questions/all"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {questions.map((question, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body1">{question.questionText}</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={1} sm={1} md={1}>
                    <img
                      src={question.option1.image}
                      alt={question.option1.text}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={1} sm={1} md={1}>
                    <img
                      src={question.option2.image}
                      alt={question.option2.text}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
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

export default QuestionList;
