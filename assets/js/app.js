/*
 * Interactive Video Player
 * Author: Chris Howell
 * Project 6
 * Date: 05/19/2018
*/



/**
 * Returns the time for a given clicked caption span id.
 * @param {String} span id attribute.
 */
function getTimeById(spanId){
    var id = spanId.substring(spanId.indexOf('-') + 1);
    if(id > 0){
        var cueIdx = id - 1;
        var cue = mediaEl[0].textTracks[0].cues[cueIdx];

        // Add a slight padding to pass overlap in cue change.
        return cue.startTime + 0.05;
    }
    return 0;
}

/**
 * Returns the currently loaded caption cue.
 * @param {Element} <track> element
 */
function getActiveCue(track){
    if(track.activeCues.length > 0){
        return track.activeCues[0];
    }
    return {id: 0}
}

// Setup mediaelementplayer
var mediaEl = $('video').mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'tracks', 'duration', 'volume', 'fullscreen'],
    videoWidth: '100%',
    videoHeight: '100%',
    enableAutosize: true
});


// cuechange event listener
$('#track-caption').on('cuechange', function(e){
    var cue = getActiveCue(this.track);
    var capEl = $('#caption-'+cue.id);
    
    // Remove any highlighting currently set.
    $('.highlight').removeClass('highlight');

    // Add highlight class to current cue item.
    capEl.addClass('highlight');
});


// click event listener for spans.
$('.captions > p > span').on('click', function(e){
    var captionId = getTimeById(this.id);
    // Set the time listed from the cue.startTime
    mediaEl[0].setCurrentTime(captionId);
});