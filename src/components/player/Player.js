import React from 'react'
import SelectionModal from './SelectionModal'
import ActiveMap from './ActiveMap'
import BaseMap from './BaseMap'
import BigMap from './BigMap'
import Directions from './Directions'

export default props => {
  return (
    <article className="w-8/12 p-5 h-full">
      <h1 className="font-display text-center text-blue-5">Sudoku</h1>
      <div className="relative mt-2 pt-10 h-full w-full flex flex-col justify-center items-center">
        <SelectionModal
          isVisible={props.selectorVisible}
          handleSelection={props.handleSelection}
          solved={props.solved}
        />
        <div className="relative mt-10 h-full w-full flex justify-center items-start">
          {props.active && Array.isArray(props.map) ? (
            <div
              className="absolute flex flex-wrap justify-start items-start m-auto"
              style={{ width: props.size * 35, height: props.size * 35 }}
            >
              <ActiveMap {...props} />
              <BaseMap {...props} />
              <BigMap {...props} />
            </div>
          ) : (
            <Directions />
          )}
        </div>
      </div>
    </article>
  )
}
