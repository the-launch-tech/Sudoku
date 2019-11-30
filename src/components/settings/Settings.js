import React from 'react'

export default ({ generate, clear, save, changeLevel, changeSize }) => {
  return (
    <nav className="container ml-auto mr-auto flex justify-between items-center h-full">
      <ul className="flex justify-start items-center">
        <li className="text-white mr-5 ml-5 font-head cursor-default">
          <h4 className="font-head">Sudoku Player</h4>
        </li>
      </ul>
      <ul className="flex justify-start items-center">
        <li
          className="text-white mr-5 ml-5 font-head text-sm cursor-pointer transition-all transition-200 hover:text-red-2"
          onClick={generate}
        >
          Generate
        </li>
        <li
          className="text-white mr-5 ml-5 font-head text-sm cursor-pointer transition-all transition-200 hover:text-red-2"
          onClick={clear}
        >
          Clear
        </li>
        <li
          className="text-white mr-5 ml-5 font-head text-sm cursor-pointer transition-all transition-200 hover:text-red-2"
          onClick={save}
        >
          Save
        </li>
        <li
          className="text-white mr-5 ml-5 font-head text-sm flex flex-col  justify-center items-center"
          onClick={save}
        >
          <span className="">Size</span>
          <select
            className="bg-tran cursor-pointer outline-none transition-all transition-200 hover:text-red-2"
            name="sudokuSize"
            onChange={changeSize}
          >
            <option value="4">4</option>
            <option value="9">9</option>
          </select>
        </li>
        <li
          className="text-white mr-5 ml-5 font-head text-sm flex flex-col  justify-center items-center"
          onClick={save}
        >
          <span className="">Difficulty</span>
          <select
            className="bg-tran cursor-pointer outline-none transition-all transition-200 hover:text-red-2"
            name="sudokuLevel"
            onChange={changeLevel}
          >
            <option value="CHILD">Child Brain</option>
            <option value="NORMAL_HUMAN">Normal Human</option>
            <option value="MENSA_MEMBER">Mensa Member</option>
          </select>
        </li>
      </ul>
    </nav>
  )
}
