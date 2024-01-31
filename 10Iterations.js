for (let i = 1; i <= 10; i++) {
  console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}

While;

i = 1;
while (i <= 10) {
  console.log(`Table of ${i}`);

  let j = 1;
  while (j <= 10) {
    const result = `${i}*${j}=${i * j}`;
    console.log(result);
    j++;
  }
  i++;
}
