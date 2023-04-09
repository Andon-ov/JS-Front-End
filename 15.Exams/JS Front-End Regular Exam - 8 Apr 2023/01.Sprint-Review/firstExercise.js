function solve(input) {

    const board = {};
    const commands = {
        "Add New": (assignee, taskId, title, status, points) => {
            board[assignee].push({taskId, title, status, points: Number(points)});
        },
        "Change Status": (assignee, taskId, newStatus) => {

            let obj = board[assignee].find((element) => element.taskId === taskId);

            if (!obj) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            } else {
                obj.status = newStatus;
            }
        },
        "Remove Task": (assignee, index) => {
            index = Number(index);

            if (index < 0 || index > board[assignee].length) {
                console.log("Index is out of range!");
            } else {
                board[assignee].splice(index, 1);
            }
        },
    };

    const n = input.shift();

    for (let i = 0; i < n; i++) {
        const [assignee, taskId, title, status, points] = input.shift().split(":");

        if (!board.hasOwnProperty(assignee)) {
            board[assignee] = [];
        }
        board[assignee].push({taskId, title, status, points: Number(points)});
    }

    for (let k = 0; k < input.length; k++) {
        let line = input[k].split(":");

        let cmd = line.shift();

        if (!board.hasOwnProperty(line[0])) {
            console.log(`Assignee ${line[0]} does not exist on the board!`);
            continue;
        }
        commands[cmd](...line);
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
}

solve([
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
);
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
])





