var start = function(option){
	$('#gridContainer').html("");

	var input = prompt('Type an integer between 1 and 128');

	if (input >= 1 && input <= 128){	// Check for non-ridiculous input
		var square_size = $('#gridContainer').width()/input - 2;	// The -2 accounts for border size

		for(var i = 1; i <= input; i++){
			for(var j = 1; j <= input; j++){
				$('#gridContainer').append('<div class="squareContainer"></div>');
			}
			$('#gridContainer').append('<div class="new_row"></div>');
		}
		$('.squareContainer').css('width',square_size);
		$('.squareContainer').css('height',square_size);

		$('.squareContainer').mouseenter(function(){
			switch(option){
				case 1:
					$(this).addClass('alternative_square');
					break;
				case 2:
					var currentOpacity = $(this).css('opacity');
					if(currentOpacity > 0){
						$(this).css('opacity', currentOpacity - 0.1);
					}
					break;
				case 3:
					/*
						Animate to 0% opacity over 800ms, then back to 100%
						opacity over 900ms when cursor leaves square.
						This "case 3" was added for fun. The Odin Project
						does not ask you to do this option.
					*/
					$(this).fadeTo(800,0);
					$(this).mouseleave(function(){
						$(this).fadeTo(900,1);
					});
					break;

			}
		});
	}
	else{
		alert('No I will not handle that to ensure efficiency of processing');
	}
};