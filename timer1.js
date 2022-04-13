const timer = async (numbers) => {
  const timers = numbers.filter((element) => {
    if (element === NaN || element < 1) {
      return false;
    }
  return true;
})
for (const trigger of timers) {
  setTimeout(async() => {
    process.stdout.write('\x07');
  }, trigger * 1000); 
}
};

const numbers = process.argv.slice(2);
timer(numbers);



// 1) No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// 2) An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// 3) An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.