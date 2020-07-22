const funcs1 = []

for (let b = 0; b < 10; b++ ) {
  funcs1.push(function() {
    console.log(b)
  })
}
funcs1[2]()
funcs1[8]()