const movies = [
    { title: 'a', year: 2018, raiting: 4.5 },
    { title: 'b', year: 2018, raiting: 4.7 },
    { title: 'c', year: 2018, raiting: 3 },
    { title: 'd', year: 2017, raiting: 4.5 }
];

const output = movies
     .sort((a, b) => b.raiting - a.raiting)
     .filter(movie => movie.raiting >= 4 && movie.year === 2018)
     .map(movie => movie.title);

console.log(output);