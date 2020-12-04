const times = process.argv.slice(2);//get arguments as an array
times = input.map()
for (let time of times) {
  if (!isNaN(time) && time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);

  }
}
