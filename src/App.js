// Moudles
import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

// Style
import "./App.css";

// Pages
import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import SignIn from "./pages/sign-in/sign-in";
import { createTheme, ThemeProvider } from "@mui/material/styles";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
