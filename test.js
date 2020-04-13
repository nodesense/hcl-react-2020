function* generator(i) {
    console.log('generator start')
  yield i; //return i, wait for next iterator call
  console.log('generator next yield')
    yield i + 10;
    console.log('generator end')
}

  // gen is iterator fucntion, derived from iterator fuction
const gen = generator(100);
let result = gen.next(); // invoke the first yeild
console.log("first ", result.value) // 100
result = gen.next(); // invoke the next yeild
console.log("second ", result.value) // 110
result = gen.next(); // invoke the next yeild which is null, end
console.log("last one ", result.value) // undefined

// k is the value part
for (let k of generator(1000)) {
    console.log("k", k)
}