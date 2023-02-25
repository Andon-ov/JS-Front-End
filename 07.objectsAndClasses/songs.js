function solve(input) {
    let songs = [];
    let numOfSongs = input.shift();
    let typeOfSong = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

    }

    for (let i = 0; i < numOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);

    }
    if (typeOfSong === 'all') {
        songs.forEach(i => console.log(i.name));

    } else {
        let filtered = songs.filter(i => i.type === typeOfSong);
        filtered.forEach(i => console.log(i.name));
    }

}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
