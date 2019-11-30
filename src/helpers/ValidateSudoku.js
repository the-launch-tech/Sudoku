export default class ValidateSudoku {
  constructor(size, map, activeMap, solutionMap) {
    this.setSize(size)
      .setBoxSize(size)
      .setMap(map)
      .setActiveMap(activeMap)
      .setSolutionMap(solutionMap)
      .setComboMap()
  }

  setSize = size => {
    this.size = size
    return this
  }

  setBoxSize = size => {
    this.boxSize = Math.sqrt(size)
    return this
  }

  setMap = map => {
    this.map = map
    return this
  }

  setActiveMap = activeMap => {
    this.activeMap = activeMap
    return this
  }

  setSolutionMap = solutionMap => {
    this.solutionMap = solutionMap
    return this
  }

  setComboMap = () => {
    this.comboMap = new Array(this.size).fill(-1).map(el => new Array(this.size).fill(-1))
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (this.map[r][c] === -1) {
          this.comboMap[r][c] = this.activeMap[r][c] ? this.activeMap[r][c] : -1
        } else {
          this.comboMap[r][c] = this.map[r][c]
        }
      }
    }
  }

  isFilled = () => {
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (this.comboMap[r][c] === -1) {
          return false
        }
      }
    }
    return true
  }

  inRow = (map, int, row, col) => {
    for (let i = 0; i < this.size; i++) {
      if (i !== col) {
        if (map[row][i] === int) {
          return true
        }
      }
    }
  }

  inCol = (map, int, row, col) => {
    for (let i = 0; i < this.size; i++) {
      if (i !== row) {
        if (map[i][col] === int) {
          return true
        }
      }
    }
  }

  inBox = (map, originalRow, originalCol, row, col, int) => {
    for (let i = 0; i < this.boxSize; i++) {
      for (let j = 0; j < this.boxSize; j++) {
        if (i + row !== originalRow || j + col !== originalCol) {
          if (map[i + row][j + col] === int) {
            return true
          }
        }
      }
    }
  }

  isOpen = (map, int, row, col) => {
    return (
      !this.inRow(map, int, row, col) &&
      !this.inCol(map, int, row, col) &&
      !this.inBox(map, row, col, row - (row % this.boxSize), col - (col % this.boxSize), int)
    )
  }

  isValid = () => {
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (!this.isOpen(this.comboMap, this.comboMap[r][c], r, c)) {
          return false
        }
      }
    }
    return true
  }

  isSolved = () => {
    if (!this.isFilled()) {
      return false
    }
    if (!this.isValid()) {
      return false
    }
    return true
  }
}
