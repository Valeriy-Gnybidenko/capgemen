"use strict";

// $('.business-video').on('click', function () {
//     $(this).find('.bus-photo').css({
//         'display' : 'none'
//     });
//     $(this).children().css({
//         'z-index' : 1,
//         'opacity' : 1
//     });
//     $(this).children().trigger('play');
//     document.querySelector('.bus-video').style.display = 'block';
// });

// $('video').on('click', function () {
//     console.log('a');
// });

const businessVideo = document.querySelector('.business-video');
const busPhoto = businessVideo.querySelector('.bus-photo');
const busVideo = businessVideo.querySelector('.bus-video');


function playVideo(e) {
    busPhoto.style.display = 'none';

    busVideo.style.cssText = `
        z-index : 1;
        opacity : 1;
    `;

    document.querySelector('.bus-video').style.display = 'block';
    busVideo.play();

    console.log('hui', e);
}


businessVideo.addEventListener('click', (e)=> playVideo(e));