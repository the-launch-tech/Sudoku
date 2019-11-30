import React from 'react'
import Settings from './settings/Settings'
import Player from './player/Player'
import History from './history/History'
import Resources from './resources/Resources'
import CreateSudoku from '../helpers/CreateSudoku'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      map: [],
      bigMap: new Array(Math.sqrt(4)).fill(0).map(el => new Array(Math.sqrt(4)).fill(0)),
      shadowMap: [],
      answerMap: [],
      size: 4,
      shadowSize: 4,
      active: false,
      history: {},
    }
  }

  generate = () => {
    this.setState(
      { size: this.state.shadowSize, boxSize: Math.sqrt(this.state.shadowSize) },
      () => {
        const Sudoku = new CreateSudoku(this.state.size)
        this.setState({
          map: Sudoku.BackTrack(Sudoku.map),
          shadowMap: Sudoku.BackTrack(Sudoku.map),
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

  changeLevel = e => {
    const children = Array.from(e.target.children)
    children.map(el => {
      if (el.selected) {
        this.setState({ shadowSize: parseInt(el.value) })
      }
    })
  }

  handleSelection = (e, row, col) => {}

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
          />
        </header>
        <main className="body flex justify-between items-start">
          <Player {...this.props} {...this.state} />
          <History {...this.props} {...this.state} />
        </main>
        <footer className="footer">
          <Resources {...this.props} {...this.state} />
        </footer>
      </div>
    )
  }
}
