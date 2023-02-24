function solve(arr) {
    let scheduled = {}
    let result;
    let day;
    let name;


    for (let i = 0; i < arr.length; i++) {

        result = arr[i].split(' ')
        day = result[0]
        name = result[1]

        if (scheduled[day]){
            console.log(`Conflict on ${day}!`)

        }else{
            scheduled[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }
    for (const key in scheduled) {
        console.log(`${key} -> ${scheduled[key]}`)
    }


}

solve(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])

/*
Scheduled for Monday
Scheduled for Wednesday

Conflict on Monday!
Scheduled for Friday

Monday -> Peter
Wednesday -> Bill
Friday -> Tim

*/