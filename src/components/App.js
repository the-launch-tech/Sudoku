import React from 'react'
import Settings from './settings/Settings'
import Player from './player/Player'
import History from './history/History'
import Resources from './resources/Resources'
import GenerateSudoku from '../helpers/GenerateSudoku'
import BoardLayers from '../helpers/BoardLayers'
import ValidateSudoku from '../helpers/ValidateSudoku'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      map: [],
      bigMap: new Array(Math.sqrt(4)).fill(0).map(el => new Array(Math.sqrt(4)).fill(0)),
      activeMap: new Array(4).fill(null).map(el => new Array(4).fill(null)),
      solutionMap: [],
      size: 4,
      shadowSize: 4,
      shadowLevel: 'CHILD',
      active: false,
      history: {},
      selectorVisible: false,
      solved: false,
    }
  }

  generate = () => {
    this.setState(
      {
        size: this.state.shadowSize,
        level: this.state.shadowLevel,
        boxSize: Math.sqrt(this.state.shadowSize),
      },
      () => {
        const Sudoku = new GenerateSudoku(this.state.size)
        Sudoku.BackTrack(Sudoku.map)
        const Boards = new BoardLayers(this.state.size, this.state.level, Sudoku.map)
        console.log(Boards.getBaseTable())
        console.log(Sudoku.BackTrack(Sudoku.map))
        this.setState({
          map: Boards.getBaseTable(),
          solutionMap: Sudoku.BackTrack(Sudoku.map),
          activeMap: new Array(this.state.size)
            .fill(null)
            .map(el => new Array(this.state.size).fill(null)),
          bigMap: new Array(Math.sqrt(this.state.size))
            .fill(0)
            .map(el => new Array(Math.sqrt(this.state.size)).fill(0)),
          active: true,
        })
      }
    )
  }

  save = () => {
    const history = Object.assign({}, this.state.history)
    const timestamp = new Date().valueOf()
    history[timestamp] = this.state.map
    this.setState({ history })
  }

  clear = () => {
    this.setState({ map: [], active: false })
  }

  changeSize = e => {
    const children = Array.from(e.target.children)
    children.map(el => {
      if (el.selected) {
        this.setState({ shadowSize: parseInt(el.value) })
      }
    })
  }

  changeLevel = e => {
    const children = Array.from(e.target.children)
    children.map(el => {
      if (el.selected) {
        this.setState({ shadowLevel: e.target.value })
      }
    })
  }

  openSelector = (e, r, c) => {
    this.setState({
      selectorVisible:
        this.state.selectorVisible &&
        this.state.selectorVisible[0] === r &&
        this.state.selectorVisible[1] === c
          ? false
          : [r, c],
    })
  }

  handleSelection = (e, n) => {
    const activeMap = Object.assign([], this.state.activeMap)
    const row = this.state.selectorVisible[0]
    const col = this.state.selectorVisible[1]
    const int = n
    this.setState({ selectorVisible: false }, () => {
      activeMap[row][col] = int
      this.setState({ activeMap }, this.checkSolution)
    })
  }

  checkSolution = () => {
    const Validator = new ValidateSudoku(
      this.state.map,
      this.state.activeMap,
      this.state.solutionMap
    )
    this.setState({ solved: Validator.isSolved() })
  }

  render() {
    return (
      <div className="w-screen h-screen">
        <header className="header">
          <Settings
            {...this.props}
            {...this.state}
            generate={this.generate}
            save={this.save}
            clear={this.clear}
            changeLevel={this.changeLevel}
            changeSize={this.changeSize}
          />
        </header>
        <main className="body flex justify-between items-start">
          <Player
            {...this.props}
            {...this.state}
            openSelector={this.openSelector}
            handleSelection={this.handleSelection}
          />
          <History {...this.props} {...this.state} />
        </main>
        <footer className="footer">
          <Resources {...this.props} {...this.state} />
        </footer>
      </div>
    )
  }
}
