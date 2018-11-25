import React from "react"
import styled from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const GradeStyles = styled.div`
  position: relative;
  height: 6.0em;

  .grade {
    display: block;
    top: 0;
    position: absolute;
    transition: all 1s;
  }

  .grade-enter {
    opacity: 0;
  }
  .grade-enter-active {
    opacity: 1;
  }
  .grade-exit {
    opacity: 1;
  }
  .grade-exit-active {
    opacity: 0;
  }
  `

const SingleGrade = styled.div`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  color: yellow;
`

const Grade = ({ grade }) => (
  <GradeStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="grade"
        classNames="grade"
        key={grade}
        timeout={{ enter: 1000, exit: 1000 }}>
        <SingleGrade>{grade}</SingleGrade>
      </CSSTransition>
    </TransitionGroup>
  </GradeStyles>
)

export default Grade
