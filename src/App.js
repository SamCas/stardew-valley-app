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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

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
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
