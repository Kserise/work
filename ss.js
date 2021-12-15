$(document).ready(function(e) {
 
    $('.mainv').vegas({
            slides: [
             {
                 src:'../img/main_Moment.jpg',
                 video:{
                        src:['../video/main.mp4'],
                        loop:true,
                        mute:true
                    }
                }
            ],
            delay:13000
    });

});