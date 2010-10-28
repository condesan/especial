$(document).ready(function(){
	$('.slideshowproyecto .view-content').cycle({ //.slideshow es el nombre del identificador personalizado que le puse a la vista para los slideshows en Drupal
		fx:     'fade', 
		speed:  'slow', 
		timeout: 3000, 
		pager:  '.navideo', //.nav es el nombre del identificador personalizado que le puse a la vista para los thumbnails en Drupal
		 
		// callback fn that creates a thumbnail to use as pager anchor 
		//poner la ruta completa a los thumbnails en Drupal
		pagerAnchorBuilder: function(idx, slide) { 
		 return '.navideo .view-content .item-list ul li:eq(' + idx + ') .views-field-phpcode .field-content a'; 
		} 
	});
});
