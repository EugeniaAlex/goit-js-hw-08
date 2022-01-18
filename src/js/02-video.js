import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
    
    localStorage.setItem('videoplayer-current-time', event.seconds);
      
};

if (localStorage.getItem('videoplayer-current-time')) { 
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};








// function onPlayVideo(data) { 
//     const savedCurrentTime = localStorage.getItem('videoplayer-current-time');
//     if (savedCurrentTime) { 
//         data.seconds = JSON.parse(savedCurrentTime);
//     };
// };

// function onVideoHappyEnd(data) {
//     localStorage.removeItem('videoplayer-current-time');
// }

// player.on('play', onPlayVideo);    

// player.on('ended', onVideoHappyEnd);








    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });
