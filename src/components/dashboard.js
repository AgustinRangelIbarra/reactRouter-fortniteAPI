import React from 'react';
import DashInterception from './dashboardInter';
import { MovieProvider } from './movieContext';
import MovieList from './movieList';
import AddMovie from './addMovie';

import '../App.css';

function Dashboard() {

  return (
    <MovieProvider>
      <div className="App">
        <h3>Dashboard</h3>
        <AddMovie />
        <DashInterception />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default Dashboard;
