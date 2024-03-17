import React, { useState, useEffect } from "react";
import OpenAI from "openai-api";
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

function BetsResult() {
  const [prosAndCons, setProsAndCons] = useState({
    option1: { pros: [], cons: [] },
    option2: { pros: [], cons: [] },
  });
  const [bestOption, setBestOption] = useState("");
  const openai = new OpenAI("YOUR_OPENAI_API_KEY");

  const handleGetBestOption = async () => {
    try {
      const prosConsString = getProsConsString(prosAndCons);
      const response = await openai.complete({
        engine: "text-davinci-003",
        prompt: prosConsString,
        maxTokens: 1,
      });
      const bestOption = response.data.choices[0].text;
      setBestOption(bestOption);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getProsConsString = (prosAndCons) => {
    const { option1, option2 } = prosAndCons;
    const option1Pros = option1.pros.join("\n");
    const option1Cons = option1.cons.join("\n");
    const option2Pros = option2.pros.join("\n");
    const option2Cons = option2.cons.join("\n");

    return `
      Pros and cons analysis:

      Option 1 Pros:
      ${option1Pros}

      Option 1 Cons:
      ${option1Cons}

      Option 2 Pros:
      ${option2Pros}

      Option 2 Cons:
      ${option2Cons}

      Which option is the best choice?
    `;
  };

  return (
    <div>
      {/* Your UI for collecting pros and cons */}
      <button onClick={handleGetBestOption}>Get Best Option</button>
      {bestOption && <p>Best Option: {bestOption}</p>}
    </div>
  );
}

function Questions() {
  const [bestOption, setBestOption] = useState("");
  const openai = new OpenAI("YOUR_OPENAI_API_KEY");
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
  const [showOption, setShowOption] = useState(""); // State variable to track the displayed option text
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

  const handleShowOption = () => {
    // Randomly select an option index (0 or 1)
    const randomOptionIndex = Math.floor(Math.random() * 2);
    // Update the state to display the text of the randomly selected option
    setShowOption(
      questions[currentQuestionIndex][`option${randomOptionIndex + 1}`].text
    );
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
          {showSummary && (
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button onClick={handleShowOption}>Show Best Option</Button>
            </Grid>
          )}
        </Grid>
        {showOption && (
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
              backgroundColor: "#4CAF50",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" sx={{ color: "#fff" }}>
              {showOption}
            </Typography>
          </Grid>
        )}

        {/* add pros cons here */}
        {/* <BetsResult /> */}
      </Grid>
    </Container>
  );
}

export default Questions;
