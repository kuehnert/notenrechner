import React, { Component } from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { FormControl, InputLabel, Select, MenuItem, TextField } from "@material-ui/core"

const scales = [
  { name: "Sekundarstufe I (Klasse 5-9)", percentages: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25] },
  { name: "Sekundarstufe II (Oberstufe)", percentages: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25] }
]

class Grader extends Component {
  state = {
    scale: 0,
    score: 10,
    max_score: 20
  }

  handleChange = (e) => {
    const { name, type, value } = e.target

    console.log("Grader : name, type, value", name, type, value)
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="Grader">
        <Paper>
          <Typography variant="h3">Testergebnis in Note umrechnen</Typography>

          <FormControl className="FormControl">
            <InputLabel htmlFor="scale">Notenskala</InputLabel>
            <Select
              value={this.state.scale}
              onChange={this.handleChange}
              inputProps={{
                name: "scale",
                id: 0
              }}>
              {scales.map((scale, i) => (<MenuItem value={i} key={i}>{scale.name}</MenuItem>)) }
            </Select>
          </FormControl>

          <FormControl>
            <TextField
              type="number"
              name="score"
              id="score"
              label="Deine Punkte"
              value={this.state.score}
              onChange={this.handleChange}
              className="TextField"
              margin="normal"
              required
              />
          </FormControl>

          <FormControl>
            <TextField
              type="number"
              name="max_score"
              id="max_score"
              label="Gesamtpunkte"
              value={this.state.max_score}
              onChange={this.handleChange}
              className="TextField"
              margin="normal"
              required
              />
          </FormControl>
        </Paper>
      </div>
    )
  }
}

export default Grader
