import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(document).ready(function() {
	var step = [
		'Pre-Build',
		'CPU',
		'Cooling',
		'RAM',
		'Case',
		'Motherboard',
		'PSU',
		'SSD',
		'GPU',
		'Cables',
		'Peripherals',
		'Setup',
		'Results'
	]

	$.each(step, function(i, el) {
		$('#side ul').append('<li><a>' + el + '</a></li>');

		$('#cont').append('<div class="step"><h2>' + el + '</h2></div>');
	});

	$('#side ul li').first().attr('id', 'active');

	$('li').click(function() {
		$('li').removeAttr('id');

		$(this).attr('id', 'active');

		var i = $(this).index();

		var len = $('#side ul li').length;
		var wd = 100 / (len * (i + 1));

		$('#prog').css('width', 'calc(' + wd + '% - 16px)'); // not accurate, overflow

		var container = $('#cont'),
			scrollTo = $('.step:nth-of-type(' + (i + 1) + ')');

		container.animate({
			scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 8 // padding
		});
	});

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// player
	window.onYouTubePlayerAPIReady = function() {
		player = new YT.Player('player', {
			videoId: 'vbDiSMQ_L_k',
			width: '228px',
			height: '119.25px',
			playerVars: {
				showinfo: 0,
				controls: 0
			},
			events: {
				'onStateChange': onPlayerStateChange
			}
		});
	}

	var done = false;

	function onPlayerStateChange(event) {
		if (player.getPlayerState() == 1) { // playing
			refresh_interval_id = setInterval(function () {
				var duration = player.getDuration();
				var currentTime = player.getCurrentTime();

				var wd = currentTime / duration * 100;

				$('#prog').css('width', wd + '%');
			}, 1000);
		} else if (player.getPlayerState() == 5 || player.getPlayerState() == 2) { // cued, paused
			clearInterval(refresh_interval_id);
		}
	}

	function stopVideo() {
		player.stopVideo();
	}

	// ctrl
});
