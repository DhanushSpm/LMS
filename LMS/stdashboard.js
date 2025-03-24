// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 240;

const styles = {
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: 1201,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: '24px',
  },
  toolbar: {
    minHeight: '64px', // Adjust based on your AppBar height
  },
};

function App() {
  return (
    <Router>
      <CssBaseline />
      <div style={styles.root}>
        <AppBar position="fixed" style={styles.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Learning Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          style={styles.drawer}
          variant="permanent"
          classes={{ paper: styles.drawerPaper }}
        >
          <div style={styles.toolbar} />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/courses">
              <ListItemIcon><BookIcon /></ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard">
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        </Drawer>
        <main style={styles.content}>
          <div style={styles.toolbar} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Box>
      <Typography variant="h4">Welcome to the Learning Management System</Typography>
      <Typography variant="body1">Select an option from the sidebar to get started.</Typography>
    </Box>
  );
}

function Courses() {
  return (
    <Box>
      <Typography variant="h4">Your Courses</Typography>
      <Typography variant="body1">Here you can view and manage your courses.</Typography>
    </Box>
  );
}

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1">Overview of your progress and activities.</Typography>
    </Box>
  );
}

export default App;
