
function solve(input) {
    const board = {};
    const commands = {
        'Add New': (assignee, taskId, title, status, points) => {
            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                return;
            } else {

                board[assignee].push({ taskId, title, status, points: Number(points) });
            }

        },
        'Change Status': (assignee, taskId, newStatus) => {



            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                return;

            }
            let obj = board[assignee].find(element => element.taskId === taskId);

            if (!obj) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);

            } else {
                obj.status = newStatus;
            }
        },
        'Remove Task': (assignee, index) => {
            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                return;

            }
            const searchedIndex = board[assignee].findIndex(fIndex => {
                index === fIndex
                console.log(index,fIndex);
            });
            console.log(searchedIndex);

        },
    };

    const n = input.shift();

    for (let i = 0; i < n; i++) {
        const [assignee, taskId, title, status, points] = input.shift().split(':');

        if (!board.hasOwnProperty(assignee)) {
            board[assignee] = [];
        }
        board[assignee].push({ taskId, title, status, points: Number(points) });
    }

    for (let k = 0; k < input.length; k++) {
        let line = input.shift().split(':');
        let cmd = line.shift();
        commands[cmd](...line);

    }
}

solve([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]);
// solve([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ]
// );


/*

    const board = {};
  

    const n = commands.shift();
    
    for (let i = 0; i < n; i++) {
      const [assignee, taskId, title, status, points] = commands.shift().split(':');
      if (!board[assignee]) board[assignee] = [];
      board[assignee].push({ taskId, title, status, points: Number(points) });
    }
  

    for (let i = 0; i < commands.length; i++) {
      const [cmd, assignee, taskOrIndex, statusOrTitle, points] = commands[i].split(':');
      if (cmd === 'Add New') {
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
          continue;
        }
        board[assignee].push({ taskId: taskOrIndex, title: statusOrTitle, status: points, points: Number(points) });
      } else if (cmd === 'Change Status') {
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
          continue;
        }
        const taskIndex = board[assignee].findIndex(task => task.taskId === taskOrIndex);
        if (taskIndex === -1) {
          console.log(`Task with ID ${taskOrIndex} does not exist for ${assignee}!`);
          continue;
        }
        board[assignee][taskIndex].status = statusOrTitle;
      } else if (cmd === 'Remove Task') {
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
          continue;
        }
        const taskIndex = Number(taskOrIndex);
        if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= board[assignee].length) {
          console.log('Index is out of range!');
          continue;
        }
        board[assignee].splice(taskIndex, 1);
      }
    }
  

    let todoPoints = 0;
    let inProgressPoints = 0;
    let codeReviewPoints = 0;
    let donePoints = 0;

    for (const assignee in board) {
      for (const task of board[assignee]) {
        if (task.status === 'ToDo') {
          todoPoints += task.points;
        } else if (task.status === 'In Progress') {
          inProgressPoints += task.points;
        } else if (task.status === 'Code Review') {
          codeReviewPoints += task.points;
        } else if (task.status === 'Done') {
          donePoints += task.points;
        }
      }
    }

    const successful = donePoints >= (todoPoints + inProgressPoints + codeReviewPoints);
  

    console.log(`ToDo: ${todoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);
    console.log(successful ? 'Sprint was successful!' : 'Sprint was unsuccessful...');

*/