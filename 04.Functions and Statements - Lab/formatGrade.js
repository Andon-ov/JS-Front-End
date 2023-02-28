
/*
    • < 3.00 - "Fail"
    • >= 3.00 and < 3.50 - "Poor"
    • >= 3.50 and < 4.50 - "Good"
    • >= 4.50 and < 5.50 - "Very good"
    • >= 5.50 - "Excellent"
*/

function solve(grade) {
    if (grade < 3) {
        console.log(`Fail (2)`);
    } else if (grade < 3.50 && grade >= 3) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.5 && grade <= 6) {
        console.log(`Excellent (${grade.toFixed(2)})`);

    }
}
solve(3.33);
solve(4.50);
solve(2.99);
solve(3.66);