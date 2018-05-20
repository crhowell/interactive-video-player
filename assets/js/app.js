function getActiveCue(track){
    if(track.activeCues.length > 0){
        return track.activeCues[0];
    }
    return {id: 0}
}

var mediaEl = $('video').mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'tracks', 'duration', 'volume', 'fullscreen']
});

$('#track-caption').on('cuechange', function(e){
    var cue = getActiveCue(this.track);
    var capEl = $('#caption-'+cue.id);
    $('.highlight').removeClass('highlight');
    capEl.addClass('highlight');
});


