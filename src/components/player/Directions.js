import React from 'react'

export default props => {
  return (
    <div
      className="w-full p-10 border border-gray-1 border-solid ml-auto mr-auto"
      style={{ maxWidth: 500 }}
    >
      <h5 className="font-head text-center mb-5 text-gray-6">Directions</h5>
      <p className="text-sm font-body text-gray-6 mb-5">
        This is a Sudoku generator that builds a random sudoku map based on a recursive algorithm
        implemented with Javascript within a ReactJS environment.
      </p>
      <ol className="ml-auto mr-auto" style={{ maxWidth: 300 }}>
        <li className="text-sm font-head text-gray-6">Click Generate</li>
        <li className="text-sm font-head text-gray-6">View Algorithmically Generated Table</li>
        <li className="text-sm font-head text-gray-6">Solve Table</li>
        <li className="text-sm font-head text-gray-6">Click Save</li>
        <li className="text-sm font-head text-gray-6">Click Clear</li>
        <li className="text-sm font-head text-gray-6">Upgrade Your Difficulty Level</li>
        <li className="text-sm font-head text-gray-6">Click Generate Again!</li>
      </ol>
    </div>
  )
}
