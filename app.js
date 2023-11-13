// Exercise 1 for
for (let i = 0; i <= 99; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Exercise 2 for
for (let m = 1; m <= 100; m++) {
  if (m % 3 == 0 && m % 5 == 0) {
    console.log("FIZZBUZZ", m);
  } else if (m % 3 == 0) {
    console.log("FIZZ", m);
  } else if (m % 5 == 0) {
    console.log("BUZZ", m);
  }
}

for (let e = 1; e <= 100; e++) {
  if (e % 3 == 0 || e % 5 == 0) {
    console.log((e % 3 == 0 ? "FIZZ" : "") + (e % 5 == 0 ? "BUZZ" : ""), e);
  }
}

// Exersice 1 while
let x = 1;

while (x <= 100) {
  if (x % 2 != 0) {
    console.log(x);
  }
  x++;
}

// Exercise 2 while
let k = 1;

while (k <= 100) {
  if (k % 3 == 0 && k % 5 == 0) {
    console.log("FIZZBUZZ", k);
  } else if (k % 3 == 0) {
    console.log("FIZZ", k);
  } else if (k % 5 == 0) {
    console.log("BUZZ", k);
  }
  k++;
}

// Exercise 1 do/while
let y = 1;

do {
  if (y % 2 != 0) {
    console.log(y);
  }
  y++;
} while (y <= 100);

// Exercise 2 do/while
let j = 1;

do {
  if (j % 3 == 0 && j % 5 == 0) {
    console.log("FIZZBUZZ", j);
  } else if (j % 3 == 0) {
    console.log("FIZZ", j);
  } else if (j % 5 == 0) {
    console.log("BUZZ", j);
  }
  j++;
} while (j <= 100);

// Exercise 4
let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

let wasFound = false;
for (let num = 0; num <= n; num++) {
  if (num == value) {
    console.log("Found value! " + value);
    found = true;
    break;
  }
}
  if (!wasFound) {
    console.log("Did not find Value");
  }

// Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

let b = start;

while (b <= end) {
  if (b % fizzDivisor == 0 && b % buzzDivisor == 0) {
    console.log("FIZZBUZZ", b);
  } else if (b % fizzDivisor == 0) {
    console.log("FIZZ", b);
  } else if (b % buzzDivisor == 0) {
    console.log("BUZZ", b);
  }
  b++;
}
