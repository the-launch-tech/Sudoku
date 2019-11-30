export default class CreateSudoku {
  constructor(size) {
    this.grid = {}
    this.base = 0
    this.removeCount = Math.floor(size ** 2 / 2)
    console.log(this.removeCount)

    this.map = new Array(size).fill(0).map(el => new Array(size).fill(0))

    this.setSize(size).setBoxSize(size)
  }

  range = (start, end) => {
    return new Array(end - start + 1).fill(undefined).map((_, index) => index + start)
  }

  shuffle = arr => {
    return arr.sort((a, b) => 0.5 - Math.random())
  }

  setSize = size => {
    this.size = size
    return this
  }

  setBoxSize = size => {
    this.boxSize = Math.sqrt(size)
    return this
  }

  inRow = (recursedMap, int, row) => {
    for (let i = 0; i < this.size; i++) {
      if (recursedMap[row][i] === int) {
        return true
      }
    }
  }

  inCol = (recursedMap, int, col) => {
    for (let i = 0; i < this.size; i++) {
      if (recursedMap[i][col] === int) {
        return true
      }
    }
  }

  inBox = (recursedMap, row, col, int) => {
    for (let i = 0; i < this.boxSize; i++) {
      for (let j = 0; j < this.boxSize; j++) {
        if (recursedMap[i + row][j + col] === int) {
          return true
        }
      }
    }
  }

  findEmpty = recursedMap => {
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (recursedMap[row][col] === 0) {
          let shadow = []
          shadow[0] = row
          shadow[1] = col
          return shadow
        }
      }
    }
    return [-1, -1]
  }

  isOpen = (recursedMap, int, row, col) => {
    return (
      !this.inRow(recursedMap, int, row) &&
      !this.inCol(recursedMap, int, col) &&
      !this.inBox(recursedMap, row - (row % this.boxSize), col - (col % this.boxSize), int)
    )
  }

  BackTrack = recursedMap => {
    let shadow = this.findEmpty(recursedMap)
    let row = shadow[0]
    let col = shadow[1]

    if (row === -1 || col === -1) {
      return recursedMap
    }

    for (let int of this.shuffle(this.range(1, this.size))) {
      if (this.isOpen(recursedMap, int, row, col)) {
        recursedMap[row][col] = int
        if (this.BackTrack(recursedMap)) {
          return recursedMap
        }
        recursedMap[row][col] = 0
      }
    }
    return false
  }

  removeElements = () => {}
}
