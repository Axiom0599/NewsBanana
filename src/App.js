import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Newsroom from "./Components/Newsroom";
// import Spinner from "/Users/nunu5/Desktop/newsapp/src/Components/Spinner.js";
// import PropTypes from 'prop-types';
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 3;

  state = {
    progress: 0,
  };
  setProgress = (progress) =>{
    this.setState({
      progress: progress,
    });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <LoadingBar color="#f11946" progress={this.state.progress} height={8} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newsroom
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <Newsroom
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <Newsroom
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <Newsroom
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <Newsroom
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <Newsroom
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <Newsroom
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
