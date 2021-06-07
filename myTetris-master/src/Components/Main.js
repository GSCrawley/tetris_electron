import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Loader from "./Loader";
import Home from "./Home"

const Main = ({ auth }) => {
  return (
    <div>
      {!auth.isLoaded ? <Loader /> : !auth.isEmpty ? <Home /> : <Login />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Main);