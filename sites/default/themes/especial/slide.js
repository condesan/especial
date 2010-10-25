$(document).ready(function(){            

$('#slideshow').cycle({ 
    fx:     'scrollLeft', 
    timeout: 6000, 
    pager:  '#sprite',
  pagerEvent: 'mouseover',
  fastOnEvent: true , 
    pagerAnchorBuilder: function(idx, slide) { 
        // return selector string for existing anchor 
        return '#sprite li:eq(' + idx + ') a'; 
    } 
});


});
