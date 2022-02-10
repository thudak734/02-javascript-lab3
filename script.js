"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

console.log(submissions);

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

addSubmission(submissions, "tom", 50, "2019-02-02");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};

deleteSubmissionByName(submissions, "Jane");
//the square brackets
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

console.log(editSubmission(submissions, 0, 100));

const findSubmissionByName = (array, name) => {
  let found = array.find((item) => {
    return item.name === name;
  });
  return found;
};

console.log(findSubmissionByName(submissions, "Jack"));

// const findLowestScore = (array) => {
//   let lowestScore = 100;
//   array.forEach((item) => {
//     if (item.score < lowestScore) {
//       return (lowestScore = item.score);
//     } else {
//       return (item.score = lowestScore);
//     }
//   });
//   return lowestScore;
// };

const findLowestScore = (array) => {
  let currentLowest = array[0];
  array.forEach((item) => {
    if (item.score < currentLowest.score) {
      currentLowest = item;
    }
  });
  return currentLowest;
};

console.log(findLowestScore(submissions));

// const findAverageScore = (array) => {
//     for(let i = 0; )
// };

const findLowestScoreV2 = (array) => {
  return array.reduce((acc, cv) => {
    return cv.score < acc.score ? cv : acc;
  });
};

console.log(findLowestScoreV2(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  array.forEach((item) => {
    sum += item.score;
  });
  return sum / array.length;
};
console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  let newArray = array.filter((item) => {
    return item.score > 60;
  });
  return newArray;
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  let newArray = array.filter((item) => {
    return item.score > 90;
  });
  return newArray;
};

console.log(filter90AndAbove(submissions));

const createRange = (start, end) => {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};

console.log(createRange(2, 8));
