'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            personalMovieDB.movies[a] = b;

        } else {
            console.log('error');
            i--;
        }
    }
}
//rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const c = prompt(`Ваш любимый жанр под номером ${i}`);
        if (c != null || c != '' || isNaN(c)) {
            console.log('done');
            personalMovieDB.genres.push(c);
        } else {
            console.log('error');
            i--;
        }
    }
}
//writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}
//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
//showMyDB(personalMovieDB.privat);


