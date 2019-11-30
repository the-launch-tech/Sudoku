export default class BoardLayers {
  constructor(size, level, map) {
    this.setSize(size)
      .setBoxSize()
      .setTotalCount()
      .setLevel(level)
      .setMap(map)
      .setRemovalCount()
      .createMapCopy()
      .createFlatMap()
      .createBaseTable()
  }

  randInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  reshapeMap = flatMap => {
    let newCopy = []
    while (flatMap.length) {
      newCopy.push(flatMap.splice(0, this.size))
    }
    return newCopy
  }

  getRandomSet = (start, end, amount) => {
    console.log(start, end, amount)
    const findUniqueInt = (start, end, set) => {
      let int = this.randInt(start, end)
      while (set.includes(int)) {
        console.log(int)
        int = findUniqueInt(start, end, set)
      }
      return int
    }

    let uniqueSet = []
    for (let i = 0; i < amount; i++) {
      let int = findUniqueInt(start, end, uniqueSet)
      uniqueSet.push(int)
    }
    return uniqueSet
  }

  setSize = size => {
    this.size = size
    return this
  }

  setBoxSize = () => {
    this.boxSize = Math.sqrt(this.size)
    return this
  }

  setTotalCount = () => {
    this.totalCount = this.size ** 2
    return this
  }

  setLevel = level => {
    this.level = level
    return this
  }

  setMap = map => {
    this.map = map
    return this
  }

  setRemovalCount = () => {
    if (this.level === 'CHILD') {
      this.removalCount = Math.floor(this.totalCount / 7)
    } else if (this.level === 'NORMAL_HUMAN') {
      this.removalCount = Math.floor(this.totalCount / 5)
    } else if (this.level === 'MENSA_MEMBER') {
      this.removalCount = Math.floor(this.totalCount / 3)
    } else {
      this.removalCount = Math.floor(this.totalCount / 7)
    }
    return this
  }

  createMapCopy = () => {
    this.mapCopy = Object.assign([], this.map)
    return this
  }

  createFlatMap = () => {
    this.flatMap = this.mapCopy.flat()
    return this
  }

  createBaseTable = () => {
    const totalIndeces = this.totalCount - 1
    const indexList = this.getRandomSet(0, Math.floor(totalIndeces / 2), this.removalCount)

    for (let i = 0; i < this.flatMap.length; i++) {
      if (indexList.includes(i)) {
        this.flatMap[i] = -1
        this.flatMap[this.flatMap.length - 1 - i] = -1
      }
    }

    this.baseTable = this.reshapeMap(this.flatMap)
  }

  getBaseTable = () => {
    return this.baseTable
  }
}
