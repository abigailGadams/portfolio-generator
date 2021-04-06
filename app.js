// To Create an array of different values
// To feed data into the array, type information after node app.js in the CL
// Separate data by spaces to create individual values
// Wrap in quotes if you wish to keep data together in process.argv
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = (profileDataArr) => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log("================");

  // Is the same as this...
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};
