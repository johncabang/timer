const alarms = process.argv.slice(2);

let time = 1000;
for (const alrm of alarms) {
  if (alrm !== NaN && alrm > 0) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * alrm)
  } 
};