import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieList from './Components/MovieList/MovieList';
import NotFound from './Components/NotFound/NotFound';
import SeatBooking from './Components/SeatBooking/SeatBooking';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/homePage">
              <HomePage></HomePage>
            </Route>
            <Route path="/movieList">
              <MovieList></MovieList>
            </Route>
            <PrivateRoute path="/seatBooking/:movieName/:movieTime/:movieDay/:movieDate">
              <SeatBooking></SeatBooking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

      </div>
    </UserContext.Provider>
  );
}

export default App;
