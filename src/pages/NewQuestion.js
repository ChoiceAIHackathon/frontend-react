// export default NewQuestion;
import React from "react";
import {
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const NewQuestion = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField
            label="Enter your question"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            // Add onChange and value props as needed for handling input
          />
        </Grid>
        <Grid item container justifyContent="center" spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Box 1 Label"
              variant="outlined"
              fullWidth
              size="small"
              // Add onChange and value props as needed for handling input
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Box 2 Label"
              variant="outlined"
              fullWidth
              size="small"
              // Add onChange and value props as needed for handling input
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" spacing={2}>
          <Grid item xs={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Box 1</Typography>
                <TextField
                  label="Box 1 URL"
                  variant="outlined"
                  fullWidth
                  size="small"
                  // Add onChange and value props as needed for handling input
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Box 2</Typography>
                <TextField
                  label="Box 2 URL"
                  variant="outlined"
                  fullWidth
                  size="small"
                  // Add onChange and value props as needed for handling input
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewQuestion;
