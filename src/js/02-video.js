import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onTimeUpdate = function(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
player.setCurrentTime(JSON.parse(savedTime));
}
