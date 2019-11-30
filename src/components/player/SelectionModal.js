import React from 'react'

export default ({ isVisible, handleSelection, solved }) => {
  return (
    <div
      className={`transition-all transition-200 w-full flex justify-center items-center ${
        isVisible ? 'active-selector' : 'inactive-selector'
      }`}
    >
      <h5 className="font-display mr-3">Selector</h5>
      <div className="flex flex-wrap justify-start items-start shadow">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => (
          <span
            key={i}
            className="cursor-pointer font-head flex justify-center items-center border border-solid border-gray-1 text-red-4 transition-all transition-200 hover:text-red-8 hover:bg-gray-1 active:bg-red-2"
            style={{ width: 30, height: 30 }}
            onClick={e => !solved && handleSelection(e, n)}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  )
}
