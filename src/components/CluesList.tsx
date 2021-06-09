import * as React from 'react'

interface IDirection {
  direction: 'Across' | 'Down'
}

export default function CluesList(prop: IDirection) {
  return (
    <div>
  <h3>{prop.direction}</h3>
  <p>clues list</p>
  </div>
  )
}