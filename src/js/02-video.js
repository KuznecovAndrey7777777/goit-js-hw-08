import Player from '@vimeo/player';
// console.log(Player);
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Відстеження події timeupdate, зберігання часу відтворення у локальне сховище, оновлення часу відтворення зі збереженої позиції.
player.on('timeupdate', throttle(element => {
    localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(element.seconds)
    );
}, 1000));

// Зберігання часу відтворення у локальному сховищі. Ключем для сховища буде рядок "videoplayer-current-time"
player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0)
    .catch(function (error) {
        console.error(error);
    });


// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay(element) { localStorage.setItem('videoplayer-current-time', JSON.stringify(element.seconds)) }

// player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));

// Завдання 2 - відеоплеєр
// HTML містить <iframe> з відео для Vimeo плеєра. Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

// <iframe
//   id="vimeo-player"
//   src="https://player.vimeo.com/video/236203659"
//   width="640"
//   height="360"
//   frameborder="0"
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe>

// Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
