import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({anecdote, points}) => {
  return (
    <div>
      {anecdote} <br/>
      has {points} votes
    </div>
  )
}

const Popular = ({points}) => {
  // ... using a trick
  const mostVotes = Math.max(...points)
  const mostPopular = anecdotes[points.findIndex(m => m === mostVotes)]

  return (
    <div>
      <Anecdote anecdote={mostPopular} points={mostVotes} />
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const selectRandom = () => setSelected(getRandomInt(anecdotes.length))

  const voteSelected = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} points={points[selected]} />
      <p>
        <button onClick={voteSelected}>vote</button>
        <button onClick={selectRandom}>next anecdote</button>
      </p>
      <h1>Anecdote with most votes</h1>
      <Popular points={points}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />, 
  document.getElementById('root')
)
