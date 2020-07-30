"use strict";
// #1
let submissions = [
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
// #2
const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
addSubmission(submissions, "Erin", 90, "2020-08-02");
console.log(submissions);

// #3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// #4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Joe");
console.log(submissions);

// #5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 2, 100);
console.log(submissions);

//  #6
const findSubmissionByName = (array, name) => {
  const found = array.find((person) => {
    return person.name === name;
  });
  return found;
};
console.log(findSubmissionByName(submissions, "Jane"));

//  #7
const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((item) => {
    if (item.score < lowestScore.score) {
      lowestScore = item;
    }
  });
  return lowestScore;
};
console.log(findLowestScore(submissions));
console.log(submissions);

// #8
const findAverageScore = (array) => {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  return sum / array.length;
};
console.log(findAverageScore(submissions));

// #9
const filterPassing = (array) => {
  let passing = array.filter((scores) => {
    return scores.passed === true;
  });
  return passing;
};
console.log(filterPassing(submissions));

// #10
const filter90AndAbove = (array) => {
  let greater = array.filter((grade) => {
    return grade.score >= 90;
  });
  return greater;
};
console.log(filter90AndAbove(submissions));
// Extended Challenges

// 1.
// const createRange = (start, end) => {
//   for (let i = 0; i >= start; i++) {
//     return Array[i];
//   }
// };
// console.log(createRange(2, 5));
