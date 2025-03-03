import React, { useEffect, useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button, Typography, Container, Switch, AppBar, Toolbar, Card, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", isActive: true, subscription: "Active", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false, subscription: "Expired", role: "Admin" },
  ]);
  const [admin, setAdmin] = useState({ name: "Admin User" });
  const [darkMode, setDarkMode] = useState(false);
  const [transactions, setTransactions] = useState([
    { id: "txn_001", user: "John Doe", amount: "$29.99", status: "Completed" },
    { id: "txn_002", user: "Jane Smith", amount: "$49.99", status: "Pending" },
  ]);

  const userAnalytics = [
    { name: "Jan", users: 50 },
    { name: "Feb", users: 75 },
    { name: "Mar", users: 110 },
    { name: "Apr", users: 90 },
    { name: "May", users: 130 },
  ];
  
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#0073E6" },
      secondary: { main: "#00A1D6" },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
  
  const handleRefund = (transactionId) => {
    setTransactions(transactions.map(transaction =>
      transaction.id === transactionId ? { ...transaction, status: "Refunded" } : transaction
    ));
    alert(`Transaction ${transactionId} has been refunded.`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 4, maxWidth: "900px" }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h5" fontWeight={700} sx={{ flexGrow: 1 }}>Admin Dashboard</Typography>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Toolbar>
        </AppBar>
        <Typography variant="h6" sx={{ mt: 3, fontWeight: 500 }}>Welcome, {admin.name}</Typography>
        <Card sx={{ mt: 3, p: 3 }}>
          <Typography variant="h6" fontWeight={600}>User Analytics</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userAnalytics}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#0073E6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card sx={{ mt: 3, p: 3 }}>
          <Typography variant="h6" fontWeight={600}>Payments & Transactions</Typography>
          <Divider sx={{ my: 1 }} />
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Transaction ID</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.user}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.status}</TableCell>
                    <TableCell>
                      {transaction.status !== "Refunded" && (
                        <Button variant="outlined" color="error" onClick={() => handleRefund(transaction.id)}>
                          Refund
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

const AdminDashboardWrapper = () => (
  <>
    <AdminDashboard />
  </>
);

export default AdminDashboardWrapper;
