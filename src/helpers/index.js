
export const isNumber = num => {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

export const isLatinChar = str => {
  const chars = ['m', 'd', 'c', 'l', 'x', 'v', 'i']
  return chars.includes(str.slice(-1).toLowerCase())
}
