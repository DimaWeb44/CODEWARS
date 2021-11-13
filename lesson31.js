const vectorLength = ([
  [initialPointX, initialPointY],
  [terminalPointX, terminalPointY],
]) =>
  Math.sqrt(
    (terminalPointX - initialPointX) ** 2 +
      (terminalPointY - initialPointY) ** 2
  )

module.exports = vectorLength