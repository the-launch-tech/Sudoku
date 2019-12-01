import React from 'react'

export default props => {
  return (
    <div className="relative w-full z-20">
      {props.map.map((row, r) => (
        <div key={r} className="flex flex-wrap justify-start items-start">
          {row.map((col, c) => (
            <span
              key={c}
              className={`transition-200 transition-all flex justify-center items-center font-head text-gray-7 ${
                col === -1 && !props.solved
                  ? 'cursor-pointer border-red-2 hover:bg-gray-1 hover:border hover:border-red-3 active:bg-white'
                  : 'cursor-default'
              } ${
                props.selectorVisible &&
                props.selectorVisible[0] === r &&
                props.selectorVisible[1] === c &&
                !props.solved
                  ? 'selecting-node'
                  : ''
              }`}
              style={{ width: 35, height: 35 }}
              onClick={e => col === -1 && !props.solved && props.openSelector(e, r, c)}
            >
              {col === -1 ? props.activeMap[r][c] : null}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
