import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  Box,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Questions() {
  const [showSummary, setShowSummary] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [coloredImageIndex, setColoredImageIndex] = useState(null);
  const [inputEnabled, setInputEnabled] = useState([false, false]);
  const [prosAndCons, setProsAndCons] = useState([
    { pros: [], cons: [] },
    { pros: [], cons: [] },
  ]);

  useEffect(() => {
    fetchQuestions();
  }, [currentQuestionIndex]);

  const fetchQuestions = () => {
    fetch(
      `https://choiceai.cyclic.app/api/questions?page=${
        currentQuestionIndex + 1
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.questions) {
          setQuestions(data.questions);
          console.log("Fetched questions:", data.questions); // Log fetched questions
          setTotalPages(data.pagination ? data.pagination.totalPages : 1);
        } else {
          console.error("No questions found");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < totalPages - 1 ? prevIndex + 1 : prevIndex
    );
    resetStates();
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
    resetStates();
  };

  const resetStates = () => {
    setColoredImageIndex(null);
    setInputEnabled([false, false]);
    setProsAndCons([
      { pros: [], cons: [] },
      { pros: [], cons: [] },
    ]);
  };

  const handleImageClick = (index) => {
    setColoredImageIndex(index);
    setInputEnabled([true, true]);
  };

  const handleProsAndConsChange = (index, type, value) => {
    setProsAndCons((prevState) => {
      const newState = [...prevState];
      newState[index] = { ...newState[index], [type]: value }; // Create a new object for the specific index
      return newState;
    });
  };

  const handleCommentSubmit = (optionIndex) => {
    console.log("Current Question Index:", currentQuestionIndex);
    console.log("Questions:", questions);
    console.log("Pros and Cons:", prosAndCons);

    const currentQuestion = questions[currentQuestionIndex];

    console.log("Current Question:", currentQuestion);

    if (!currentQuestion) {
      console.error("No question found");
      return;
    }

    const { _id, option1, option2 } = currentQuestion;

    console.log("Current Question ID:", _id);
    console.log("Option 1:", option1);
    console.log("Option 2:", option2);

    if (!option1 || !option2) {
      console.error("Options not found");
      return;
    }

    const dataToSend = {
      prosAndCons: [
        { pros: prosAndCons[0].pros, cons: prosAndCons[0].cons },
        { pros: prosAndCons[1].pros, cons: prosAndCons[1].cons },
      ],
      questionId: _id,
      questionText: currentQuestion.questionText,
    };

    console.log("Data to send to backend:", dataToSend);

    fetch(`https://choiceai.cyclic.app/api/questions/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Pros and cons updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating pros and cons:", error);
      });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        {questions.length > 0 && (
          <Grid item xs={12}>
            <Card sx={{ border: "none", outline: "none", boxShadow: "none" }}>
              <Typography variant="body1" textAlign="center" gutterBottom>
                {questions[0].questionText}
              </Typography>

              <Grid container>
                <Grid item xs={12}>
                  <Box
                    component="img"
                    src={questions[0].option1.image}
                    alt="Option 1"
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      filter:
                        coloredImageIndex === 0 ? "none" : "grayscale(100%)",
                    }}
                    onClick={() => handleImageClick(0)}
                  />
                  <Typography
                    variant="body1"
                    textAlign="center"
                    style={{
                      backgroundColor: "#333",
                      color: "#f0f0f0",
                      padding: "8px",
                    }}
                  >
                    {questions[0].option1.text}
                  </Typography>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      placeholder={"Pros"}
                      variant="outlined"
                      fullWidth
                      multiline
                      disabled={!inputEnabled[0]}
                      value={prosAndCons[0].pros}
                      onChange={(e) =>
                        handleProsAndConsChange(0, "pros", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      placeholder={"Cons"}
                      variant="outlined"
                      fullWidth
                      multiline
                      disabled={!inputEnabled[0]}
                      value={prosAndCons[0].cons}
                      onChange={(e) =>
                        handleProsAndConsChange(0, "cons", e.target.value)
                      }
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Box mt={2} textAlign="center">
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <IconButton
                          onClick={handlePreviousQuestion}
                          disabled={currentQuestionIndex === 0}
                        >
                          <ArrowBackIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h6"
                          textAlign="center"
                          sx={{ margin: "1rem 0" }}
                        >
                          VS
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={handleNextQuestion}
                          disabled={currentQuestionIndex === totalPages - 1}
                        >
                          <ArrowForwardIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    component="img"
                    src={questions[0].option2.image}
                    alt="Option 2"
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      filter:
                        coloredImageIndex === 1 ? "none" : "grayscale(100%)",
                    }}
                    onClick={() => handleImageClick(1)}
                  />
                  <Typography
                    variant="body1"
                    textAlign="center"
                    style={{
                      backgroundColor: "#333",
                      color: "#f0f0f0",
                      padding: "8px",
                    }}
                  >
                    {questions[0].option2.text}
                  </Typography>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      placeholder={"Pros"}
                      variant="outlined"
                      fullWidth
                      multiline
                      disabled={!inputEnabled[1]}
                      value={prosAndCons[1].pros}
                      onChange={(e) =>
                        handleProsAndConsChange(1, "pros", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      placeholder={"Cons"}
                      variant="outlined"
                      fullWidth
                      multiline
                      disabled={!inputEnabled[1]}
                      value={prosAndCons[1].cons}
                      onChange={(e) =>
                        handleProsAndConsChange(1, "cons", e.target.value)
                      }
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleCommentSubmit(0)}
                    >
                      Done
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      onClick={() => setShowSummary(!showSummary)}
                    >
                      AI Summary
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h6" textAlign="center" gutterBottom>
            Pros and Cons
          </Typography>
          {showSummary && (
            <Grid container spacing={2}>
              {questions.map((question, index) => (
                <React.Fragment key={question._id}>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "700" }}
                    >
                      {question.option1.text}
                    </Typography>
                    {question.option1.pros.map((pro, index) => (
                      <Typography
                        key={index}
                        style={{
                          border: "1px solid #2ECC71",
                          borderRadius: "4px",
                          padding: "4px",
                          marginBottom: "4px",
                          backgroundColor: "#e8f3db",
                        }}
                      >
                        {pro}
                      </Typography>
                    ))}
                    {question.option1.cons.map((con, index) => (
                      <Typography
                        key={index}
                        style={{
                          border: "1px solid #E74C3C",
                          borderRadius: "4px",
                          padding: "4px",
                          marginBottom: "4px",
                          backgroundColor: "#ffdadb",
                        }}
                      >
                        {con}
                      </Typography>
                    ))}
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "700" }}
                    >
                      {question.option2.text}
                    </Typography>
                    {question.option2.pros.map((pro, index) => (
                      <Typography
                        key={index}
                        style={{
                          border: "1px solid #2ECC71",
                          borderRadius: "4px",
                          padding: "4px",
                          marginBottom: "4px",
                          backgroundColor: "#e8f3db",
                        }}
                      >
                        {pro}
                      </Typography>
                    ))}
                    {question.option2.cons.map((con, index) => (
                      <Typography
                        key={index}
                        style={{
                          border: "1px solid #E74C3C",
                          borderRadius: "4px",
                          padding: "4px",
                          marginBottom: "4px",
                          backgroundColor: "#ffdadb",
                        }}
                      >
                        {con}
                      </Typography>
                    ))}
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          )}
        </Grid>

        {/* add pros cons here */}
      </Grid>
    </Container>
  );
}

export default Questions;
