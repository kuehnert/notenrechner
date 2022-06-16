import grey from "@material-ui/core/colors/grey"
import red from "@material-ui/core/colors/red"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import React, { Component } from "react"
import "./App.css"
import Grader from "./Grader"
import Notes from "./Notes";

const theme = createMuiTheme({
  type: "dark",
  typography: {
    useNextVariants: true,
    fontFamily: ["Permanent Marker", "cursive"].join(","),
    fontSize: 12
  },
  palette: {
    type: "dark",
    primary: grey,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="shade">
          <div className="blackboard">
            <Grader />
          </div>
          <div className="blackboard">
            <Notes />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
