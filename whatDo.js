const tasks = [
  {
    name: 'minishape',
    score: 7,
  },
  {
    name: 'nonononogramgram',
    score: 7,
  },
  {
    name: 'Palette Knife Painting',
    score: 7,
  },
  {
    name: 'Home Repair',
    score: 3,
  },
  {
    name: 'Gardening',
    score: 3,
  },
  {
    name: 'Piano Practice',
    score: 7,
  },
  {
    name: 'Guitar Practice',
    score: 4,
  },
  {
    name: 'Short Story',
    score: 5,
  }
]

const whatDo = (tasks) => {
  // Take scores and make them percentages of total score
  // randomise based on score percentage
  // return random task
  const totalScore = tasks.reduce((acc, task) => acc + task.score, 0)
  let cumulativePercentage = 0
  const tasksWithPercentages = tasks.map(task => {
    const percentage = task.score / totalScore
    cumulativePercentage += percentage
    return {
      ...task,
      percentage,
      range: [cumulativePercentage - percentage, cumulativePercentage],
    }
  })
  const random = Math.random()
  const task = tasksWithPercentages.find(task => {
    return random >= task.range[0] && random <= task.range[1]
  })
  return task.name

}

const task = whatDo(tasks)
console.log('Today please do at least an hour of:', task)
// "Validation"
// const totals = {}
// for (let i = 0; i < 1000; i++) {
//   const task = whatDo(tasks)
//   if (!totals[task]) {
//     totals[task] = 0
//   }
//   totals[task]++
// }

// const results = Object.entries(totals).map(total => {
//   const [task, count] = total
//   return `${task}: ${count/1000}`  
// })

// console.log(results)