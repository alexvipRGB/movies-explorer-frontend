//БД Сайта
export const apiMain = {
  baseURL: 'https://api.alpetrov.dip.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  }
};
//БД Beatfilm
export const movieApiBeatfilm = {
  baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
};
export const BEATFILM_URL = 'https://api.nomoreparties.co';
export const CHANGE_SUCCESS = 'Данные профиля обновлены';
export const EMPTY_FIELD = 'Нужно ввести корректное слово';
export const SHORTS_DURATION = 40;
export const PATTERN_EMAIL = '[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.{1,1}[a-z]{2,}';
export const MOBILE_SCREEN_WIDTH = 600;
export const TABLET_SCREEN_WIDTH = 905;
export const DESKTOP_CARDS_AMOUNT = {totalCards: 12, extraCards: 3};
export const TABLET_CARDS_AMOUNT = {totalCards: 8, extraCards: 2};
export const MOBILE_CARDS_AMOUNT = {totalCards: 5, extraCards: 2};
