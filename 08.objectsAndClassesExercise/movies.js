function solve(arr) {
    let movies = [];


    for (const line of arr) {

        if (line.startsWith('addMovie')) {
            let name = line.slice(9,)
            movies.push({name})

        } else if (line.includes('directedBy')) {

            let [movieName, directedBy] = line.split(' directedBy ')
            let movie = movies.find(x => x.name === movieName)
            if (movie) {
                movie.director = directedBy
            }


        } else if (line.includes('onDate')) {
            let [movieName, onDate] = line.split(' onDate ')

            let movie = movies.find(x => x.name === movieName)
            if (movie) {
                movie.date = onDate
            }

        }


    }
    movies.forEach(movie => {
            if (movie.name && movie.date && movie.director) {
                console.log(JSON.stringify(movie))
            }
        }
    )
}

solve(["addMovie Fast and Furious", "addMovie Godfather", "Inception directedBy Christopher Nolan", "Godfather directedBy Francis Ford Coppola", "Godfather onDate 29.07.2018", "Fast and Furious onDate 30.07.2018", "Batman onDate 01.08.2018", "Fast and Furious directedBy Rob Cohen",]);
// solve([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);
