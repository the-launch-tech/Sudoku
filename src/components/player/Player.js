import React from 'react'

export default ({ map, active, size, boxSize, handleSelection, bigMap, shadowMap }) => {
  return (
    <article className="w-8/12 p-5 h-full">
      <h1 className="font-display text-center text-blue-5">Sudoku</h1>
      <div className="mt-2 h-full w-full flex justify-center items-center">
        {active && Array.isArray(map) ? (
          <div
            className="absolute flex flex-wrap justify-start items-start m-auto"
            style={{ width: size * 35, height: size * 35 }}
          >
            {map.map((row, r) => (
              <div
                key={r}
                className="relative flex flex-wrap justify-start items-start w-full z-20"
              >
                {row.map((col, c) => (
                  <span
                    key={c}
                    className={`flex justify-center items-center font-head text-gray-7 ${
                      col === -1 ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    style={{ width: 35, height: 35 }}
                    onClick={e => col === -1 && handleSelection(e, row, col)}
                  ></span>
                ))}
              </div>
            ))}
            <div className="absolute top-0 left-0 w-full h-full z-0">
              {shadowMap.map((row, r) => (
                <div key={r} className="flex flex-wrap justify-start items-start w-full">
                  {row.map((col, c) => (
                    <span
                      key={c}
                      className={`border border-solid border-gray-2 flex justify-center items-center font-head text-gray-7`}
                      style={{ width: 35, height: 35 }}
                    >
                      {col === 0 ? null : col}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-0 z-10">
              {bigMap.map((row, r) => (
                <div key={r} className="flex flex-wrap justify-start items-start m-auto">
                  {row.map((col, c) => (
                    <div
                      key={c}
                      style={{ width: 35 * boxSize, height: 35 * boxSize }}
                      className="border border-solid border-gray-7"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="w-full p-10 border border-gray-1 border-solid ml-auto mr-auto"
            style={{ maxWidth: 500 }}
          >
            <h5 className="font-head text-center mb-5 text-gray-6">Directions</h5>
            <p className="text-sm font-body text-gray-6 mb-5">
              This is a Sudoku generator that builds a random sudoku map based on a recursive
              algorithm implemented with Javascript within a ReactJS environment.
            </p>
            <ol className="ml-auto mr-auto" style={{ maxWidth: 300 }}>
              <li className="text-sm font-head text-gray-6">Click Generate</li>
              <li className="text-sm font-head text-gray-6">
                View Algorithmically Generated Table
              </li>
              <li className="text-sm font-head text-gray-6">Solve Table</li>
              <li className="text-sm font-head text-gray-6">Click Save</li>
              <li className="text-sm font-head text-gray-6">Click Clear</li>
              <li className="text-sm font-head text-gray-6">Upgrade Your Difficulty Level</li>
              <li className="text-sm font-head text-gray-6">Click Generat Again!</li>
            </ol>
          </div>
        )}
      </div>
    </article>
  )
}
