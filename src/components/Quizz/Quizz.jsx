import React from 'react'
import './Quizz.css'

const Quizz = () => {
  return (
    <div className='container'>
      <h1>Quiz</h1>
      <hr/>
      <h2>Which device is required for the internet connection</h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>Pen Drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 question</div>
    </div>
  )
}

export default Quizz