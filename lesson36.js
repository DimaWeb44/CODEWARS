const findSpaceship = (map = '') => {
    if (!map.includes('X')) return 'Spaceship lost forever.'
  
    const spaces = map
      .trim()
      .split(/\n/)
      .reverse()
  
    const y = spaces.findIndex(space => space.includes('X'))
    const x = spaces[y].indexOf('X')
  
    return [x, y]
  }