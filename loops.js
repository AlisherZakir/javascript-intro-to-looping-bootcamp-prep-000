function forLoop(arr) {
  for(var i = 0; i < 25; i++) {
    arr.push(`I am ${i + 1} string loop${i === 0 ? '' : 's'}.`)
  }
  return arr;
}