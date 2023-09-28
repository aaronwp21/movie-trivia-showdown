import React, { useContext } from 'react'
import { QuestionsContext } from './contexts/questions.context'

function Results() {
  const { round1Score, round2Score, round3Score } = useContext(QuestionsContext)

  return (
    <div className='flex flex-col flex-1'>
      <h2 className='text-center text-2xl font-semibold underline underline-offset-4'>Results</h2>
      <div>
        <ol>
          <li>
            Round 1: {round1Score}
          </li>
          <li>
            Round 2: {round2Score}
          </li>
          <li>
            Round 3: {round3Score}
          </li>
          <li>
            Total: {round1Score + round2Score + round3Score}
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Results