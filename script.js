$(document).ready(function(){
	
	$("#first").draggable({
		scroll:true,
		revert:true,
	});
	$( "#draggable2" ).draggable({ 
	scroll: true, 
	revert:true,
	revert:"invalid",
	scrollSensitivity: 100, 
	});
	
	$( "#draggable" ).draggable({
		revert:true,
		revert:"valid",
	});
	
	    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
	
	    $( "#UL" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#UL LI" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });
      }
    });
	
	
	$("#accordion").accordion({
		collapsible:true,
	});
	
});