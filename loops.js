function forLoop(arr) {
  for(var i = 0; i < 25; i++) {
    arr.push(`I am ${i} string loop${i === 0 ? '' : 's'}.`)
  }
  return arr;
}