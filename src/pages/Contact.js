import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Olegs Krivko</Typography>
              <Typography variant="body1" color="textSecondary">
                Fullstack Developer
              </Typography>
              <Typography variant="body2">
                Email: olegs.krivko@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Ilze Rigerte</Typography>
              <Typography variant="body1" color="textSecondary">
                Fullstack Developer
              </Typography>
              <Typography variant="body2">Email: irigerte@gmail.com</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
        We're looking for a designer!
      </Typography>
      <Typography variant="body1" align="center">
        If you're passionate about design and interested in joining our team,
        please reach out to us.
      </Typography>
    </Container>
  );
};

export default Contact;
