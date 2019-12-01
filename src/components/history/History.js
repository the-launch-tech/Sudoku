import React from 'react'
import PreviousGame from './PreviousGame'

export default ({ history, size, boxSize, restoreGame }) => {
  return (
    <section className="w-4/12 pt-5 pb-5 pl-2 pr-2 rounded-lg shadow border border-gray-1 border-solid h-full bg-white">
      <h3 className="font-head mt-5 mb-5 text-center text-gray-6">Game History</h3>
      <div
        className="relative block w-full overflow-hidden"
        style={{ height: `calc(100% - 60px)` }}
      >
        {history && Object.keys(history) ? (
          <div className="relative block h-full w-full overflow-y-scroll">
            {Object.keys(history).map((key, i) => {
              const game = history[key]
              return (
                <div className="relative mt-5 mb-5 p-5 w-full bg-white shadow rounded-lg relative flex flex-col justify-start items-start border border-gray-1">
                  <h5 className="font-head text-gray-6 cursor-default">{key}</h5>
                  <p className="text-body text-sm text-gray-6">Level: {game.level}</p>
                  <p className="text-body text-sm text-gray-6">
                    {game.solved ? 'Solved!' : 'Not Solved'}
                  </p>
                  <div
                    className="relative w-full mt-3 flex justify-start items-start"
                    style={{ height: game.size * 25 }}
                  >
                    <PreviousGame key={i} game={game} />
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="mt-5 mb-5">
            <h6 className="text-center font-head text-gray-6">No Game History Exists Yet!</h6>
          </div>
        )}
      </div>
    </section>
  )
}
