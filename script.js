const arr = ['1487', '52', '2359871', '2032015', '4013', '32068', '475'];

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (num[0] == 4 || num[0] == 2) {
    console.log(num);
  }
}

let counter = 0;
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      counter++;
    }
  }

  if (counter === 2) {
    console.log(i, 'Делители этого числа: 1 и ' + i);
  }

  counter = 0;
}
