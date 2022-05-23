import "./App.css";
import Navbar from "./components/Navbar";
// import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import News from "./components/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/sports"
              element={<News pageSize={6} country="in" category="sports" />}
            />
            <Route
              path="/business"
              element={<News pageSize={6} country="in" category="business" />}
            />
            <Route
              path="/technology"
              element={<News pageSize={6} country="in" category="technology" />}
            />
            <Route
              path="/general"
              element={<News pageSize={6} country="in" category="general" />}
            />
            <Route
              path="/health"
              element={<News pageSize={6} country="in" category="health" />}
            />
            <Route
              path="/science"
              element={<News pageSize={6} country="in" category="science" />}
            />
            <Route
              path="/entertainment"
              element={<News pageSize={6} country="in" category="entertainment" />}
            />
          </Routes>
        </BrowserRouter>
       
      </>
    );
  }
}
