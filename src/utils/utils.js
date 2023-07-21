import {
  MOBILE_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  DESKTOP_CARDS_AMOUNT,
  TABLET_CARDS_AMOUNT,
  MOBILE_CARDS_AMOUNT,
  SHORTS_DURATION,
} from './constants';

export function getCardsAmount() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= MOBILE_SCREEN_WIDTH) {
    return MOBILE_CARDS_AMOUNT;
  } else if (screenWidth <= TABLET_SCREEN_WIDTH) {
    return TABLET_CARDS_AMOUNT;
  }

  return DESKTOP_CARDS_AMOUNT;
}

export function convertDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minute = duration % 60;
  const resultTime = [];

  if (hours) resultTime.push(`${hours}ч`);
  if (minute) resultTime.push(`${minute}м`);

  return resultTime.join(' ');
}

function checkMovieDuration(movieDuration, isShortsIncluded, shortsDurationCriteria = SHORTS_DURATION) {
  return (isShortsIncluded && (movieDuration <= shortsDurationCriteria)) || (!isShortsIncluded && (movieDuration > shortsDurationCriteria));
}

function filterMovieByQuerry(movie, searchQuerry) {
  const lowerQuerry = searchQuerry.toLowerCase();
  return movie.nameRU.toLowerCase().includes(lowerQuerry);
}

export function movieFilter(movie, { querry, includeShorts }) {
  return checkMovieDuration(movie.duration, includeShorts) && filterMovieByQuerry(movie, querry);
}