import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Blogs from "../pages/blogs/BlogsComponent";
import Resume from "../pages/resume/ResumeComponent";
import Error from "../pages/error/ErrorComponent";
import { settings } from "../portfolio.js";
import { Suspense } from "react";
const Home = React.lazy(() => import("../pages/home/HomeComponent"));

export default class Main extends Component {
  render() {
    if (settings.isSplash) {
      return (
        <Suspense
          fallback={
            <div className="container my-auto mx-auto">
              <img
                src={require("../assests/images/infinity-gif.svg")}
                alt="infinity and beyond..."
              />
            </div>
          }
        >
          <div>
            <Router>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Splash {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/home"
                  render={(props) => (
                    <Home {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/experience"
                  exact
                  render={(props) => (
                    <Experience {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/education"
                  render={(props) => (
                    <Education {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/opensource"
                  render={(props) => (
                    <Opensource {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/contact"
                  render={(props) => (
                    <Contact {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/splash"
                  render={(props) => (
                    <Splash {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/projects"
                  render={(props) => (
                    <Projects {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/blogs"
                  render={(props) => (
                    <Blogs {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/resume"
                  exact
                  render={(props) => (
                    <Resume {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  render={(props) => (
                    <Error {...props} theme={this.props.theme} />
                  )}
                />
              </Switch>
            </Router>
          </div>
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <Router>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Home {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/home"
                  exact
                  render={(props) => (
                    <Home {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/experience"
                  exact
                  render={(props) => (
                    <Experience {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/education"
                  exact
                  render={(props) => (
                    <Education {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/opensource"
                  exact
                  render={(props) => (
                    <Opensource {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/contact"
                  exact
                  render={(props) => (
                    <Contact {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/blogs"
                  exact
                  render={(props) => (
                    <Blogs {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/splash"
                  render={(props) => (
                    <Splash {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/projects"
                  exact
                  render={(props) => (
                    <Projects {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  path="/resume"
                  exact
                  render={(props) => (
                    <Resume {...props} theme={this.props.theme} />
                  )}
                />
                <Route
                  render={(props) => (
                    <Error {...props} theme={this.props.theme} />
                  )}
                />
              </Switch>
            </Router>
          </div>
        </Suspense>
      );
    }
  }
}
