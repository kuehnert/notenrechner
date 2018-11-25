import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core"
import React, { Component } from "react"
import { prozentInNote } from "./utils"
import Grade from "./Grade"

const scales = [
  {
    name: "Sekundarstufe I (Klasse 5-9)",
    percentages: [0.96, 0.91, 0.87, 0.82, 0.77, 0.73, 0.68, 0.63, 0.59, 0.54, 0.49, 0.45, 0.36, 0.27, 0.18]
  },
  {
    name: "Sekundarstufe II (Oberstufe)",
    percentages: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25]
  }
]

class Grader extends Component {
  state = {
    scale: 1,
    score: "",
    max_score: "",
    grade: ""
  }

  calculateGrade = () => {
    const { score, max_score } = this.state
    let grade = "Ungültig"

    if (score && max_score && max_score > 0) {
      const percentage = score / max_score
      grade = prozentInNote(scales[this.state.scale].percentages, percentage, true)
    } else {
      grade = null
    }

    this.setState({ grade })
  }

  handleChange = async ({ target: { name, value } }) => {
    await this.setState({ [name]: value })
    this.calculateGrade()
  }

  render() {
    return (
      <div className="MyForm">
        <Typography variant="h3" className="Title">
          Testergebnis
        </Typography>

        <FormControl className="Fullwidth">
          <InputLabel htmlFor="scale" className="Title">
            Notenskala
          </InputLabel>
          <Select
            value={this.state.scale}
            onChange={this.handleChange}
            inputProps={{
              name: "scale",
              id: 0
            }}>
            {scales.map((scale, i) => (
              <MenuItem value={i} key={i}>
                {scale.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="Halfwidth">
        <FormControl className="FormControl">
          <TextField
            type="number"
            name="score"
            id="score"
            label="Deine Punkte"
            value={this.state.score}
            onChange={this.handleChange}
            margin="normal"
          />
        </FormControl>
        </div>

        <div className="Halfwidth">
          <FormControl className="FormControl">
            <TextField
              type="number"
              name="max_score"
              id="max_score"
              label="Gesamtpunkte"
              value={this.state.max_score}
              onChange={this.handleChange}
              margin="normal"
            />
          </FormControl>
        </div>

        <div className="Fullwidth">
          <Typography variant="h4" className="Subtitle">
            Note
          </Typography>
          <Grade grade={this.state.grade} />
        </div>
      </div>
    )
  }
}

export default Grader
