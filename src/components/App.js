import React from 'react'
import Settings from './settings/Settings'
import Player from './player/Player'
import History from './history/History'
import SaveModal from './history/SaveModal'
import Resources from './resources/Resources'
import GenerateSudoku from '../helpers/GenerateSudoku'
import BoardLayers from '../helpers/BoardLayers'
import ValidateSudoku from '../helpers/ValidateSudoku'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.defaultSize = 4

    this.state = {
      history: {},
      map: [],
      bigMap: this.initializeBigMap(this.defaultSize),
      activeMap: this.initializeActiveMap(this.defaultSize),
      solutionMap: [],
      size: this.defaultSize,
      shadowSize: this.defaultSize,
      shadowLevel: 'CHILD',
      active: false,
      selectorVisible: false,
      solved: false,
      saveModalOpen: false,
      gameTimestamp: null,
    }
  }

  componentDidMount() {
    this.getTimestamp()
  }

  initializeBigMap = size => {
    return new Array(Math.sqrt(size)).fill(0).map(el => new Array(Math.sqrt(size)).fill(0))
  }

  initializeActiveMap = size => {
    return new Array(size).fill(null).map(el => new Array(size).fill(null))
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
        this.setState({
          map: Boards.getBaseTable(),
          solutionMap: Sudoku.BackTrack(Sudoku.map),
          activeMap: this.initializeActiveMap(this.state.size),
          bigMap: this.initializeBigMap(this.state.size),
          active: true,
        })
      }
    )
  }

  toggleSaveModal = () => {
    this.setState(prev => ({ saveModalOpen: !prev.saveModalOpen }))
  }

  clear = () => {
    this.setState({
      map: [],
      active: false,
      solved: false,
      solutionMap: [],
      activeMap: this.initializeActiveMap(this.state.size),
      bigMap: this.initializeBigMap(this.state.size),
    })
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
      this.state.size,
      this.state.map,
      this.state.activeMap,
      this.state.solutionMap
    )
    this.setState({ solved: Validator.isSolved() })
  }

  saveGame = () => {
    const saveNameInput = document.querySelector('input[name="gameName"]').value
    const history = Object.assign({}, this.state.history)
    history[saveNameInput ? saveNameInput : 'Game ID: ' + this.state.gameTimestamp] = {
      map: this.state.map,
      activeMap: this.state.activeMap,
      solutionMap: this.state.solutionMap,
      bigMap: this.state.bigMap,
      solved: this.state.solved,
      timestamp: this.state.gameTimestamp,
      size: this.state.size,
      boxSize: Math.sqrt(this.state.size),
      level: this.state.level,
    }
    this.setState({ history }, () => {
      this.toggleSaveModal()
      this.clear()
    })
  }

  getTimestamp = () => {
    this.setState({ gameTimestamp: Math.floor(Date.now() / 1000) }, () => {
      setTimeout(() => this.getTimestamp(), 5000)
    })
  }

  restoreGame = game => {
    this.setState({
      map: game.map,
      solutionMap: game.solutionMap,
      activeMap: game.activeMap,
      bigMap: game.bigMap,
      size: game.size,
      level: game.level,
      active: true,
      solved: game.solved,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="w-screen h-screen">
        <SaveModal
          {...this.props}
          {...this.state}
          saveGame={this.saveGame}
          toggleSaveModal={this.toggleSaveModal}
        />
        <header className="header">
          <Settings
            {...this.props}
            {...this.state}
            generate={this.generate}
            toggleSaveModal={this.toggleSaveModal}
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
          <History {...this.props} {...this.state} restoreGame={this.restoreGame} />
        </main>
        <footer className="footer">
          <Resources {...this.props} {...this.state} />
        </footer>
      </div>
    )
  }
}
