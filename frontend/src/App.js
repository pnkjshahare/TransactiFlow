import React, { useState, useEffect } from "react";
import TransactionTable from "./components/TransactionTable";
import Statistics from "./components/Statistics";
import Charts from "./components/Charts";
import { Container, Grid, Paper } from "@mui/material";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(3); // March by default

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
      style={{ background: "grey" }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Statistics month={selectedMonth} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <TransactionTable
              month={selectedMonth}
              onMonthChange={setSelectedMonth}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Charts month={selectedMonth} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
