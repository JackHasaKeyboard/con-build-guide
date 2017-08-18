import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(document).ready(function() {
	var id = 'vbDiSMQ_L_k';

	var part = [
		{
			item: "CPU",
			name: "Intel Pentium G3258 \"Anniversary Edition\"",
			price: 179.98
		},
		{
			item: "SSD",
			name: "Intel 530 series",
			price: 108.10
		},
		{
			item: "Hard Drive (optional)",
			name: "Western Digital Green",
			price: 42.99
		},
		{
			item: "Motherboard",
			name: "ASUS Z97-C 321.21",
			price: 321.21
		},
		{
			item: "Case",
			name: "Corsair Spec",
			price: 69.99
		},
		{
			item: "Video Card",
			name: "Radeon R7 260X",
			price: 287.62
		},
		{
			item: "RAM",
			name: "8GB Kingston/Corsair/G.Skill/OtherGoodBrand ",
			price: 75.68
		},
		{
			item: "Power Supply",
			name: "Corsair CX Series 430W Semi-Modular",
			price: 219.69
		},
		{
			item: "Mouse",
			name: "Corsair M45 mouse",
			price: 60.17
		},
		{
			item: "Keyboard (approx)",
			name: "Cheap Keyboard",
			price: "~50.00"

		},
		{
			item: "Monitor",
			name: "Gaming / Workstation",
			price: "~150.00"
		}
	]

	var total = 0,
		approx;

	$.each(part, function(i, el) {
		$('table tbody').append('<tr><td>' + el["item"] + '</td><td>' + el["name"] + '</td><td>' + el["price"] + '</td></tr>');

		if (typeof el['price'] == 'number') {
			total += el['price']
		} else if (typeof el['price'] == 'string') {
			total += parseInt(el['price'].match(/\d+/))

			approx = true;
		}
	});

	approx == true ? total = '~' + total : total = total

	$('#price').append('<span id="total">' + total + '</span>');

	var step = [
		{
			name: 'Overview',
			ts: 0
		},
		{
			name: 'Pre-Build',
			ts: 80
		},
		{
			name: 'CPU',
			ts: 120
		},
		{
			name: 'Cooling',
			ts: 184
		},
		{
			name: 'RAM',
			ts: 249
		},
		{
			name: 'Case',
			ts: 290
		},
		{
			name: 'Motherboard',
			ts: 342
		},
		{
			name: 'PSU',
			ts: 419
		},
		{
			name: 'SSD',
			ts: 488
		},
		{
			name: 'GPU',
			ts: 547
		},
		{
			name: 'Cables',
			ts: 631
		},
		{
			name: 'Peripherals',
			ts: 658
		},
		{
			name: 'Setup',
			ts: 722
		},
		{
			name: 'Results',
			ts: 778
		}
	]

	$.each(step, function(i, el) {
		$('#side ul').append('<li><a>' + el["name"] + '</a></li>');

		$('#cont').append('<div class="step" id="' + el["name"] + '"><h2>' + el["name"] + '</h2></div>');
	});

	$('#side ul li').first().attr('id', 'active');

	// player
	window.onYouTubePlayerAPIReady = function() {
		player = new YT.Player('player', {
			videoId: id,
			width: '228px',
			height: '128.25px',
			playerVars: {
				showinfo: 0,
				controls: 0
			},
			events: {
				'onStateChange': onPlayerStateChange,
				'onReady': onPlayerReady
			}
		});
	}

	function onPlayerReady(e) {
		$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + key + '&part=snippet,contentDetails',
			dataType: 'json',
			async: false,
			success: function(data) {
				title = data.items[0].snippet.title;
				date = moment(data.items[0].snippet.publishedAt).format('LL');
				desc = data.items[0].snippet.description;

				$('title').text(title + ' -  Linus Tech Tips');
				$('#title').prepend(title);

				$('#date').text(date);
			}
		});
	}

	var done = false;

	function onPlayerStateChange(e) {
		if (player.getPlayerState() == 1) { // playing
			updateProg = setInterval(function() {
				var duration = player.getDuration();
				var currentTime = player.getCurrentTime();

				var wd = currentTime / duration * 100;

				$('#prog #bar').css('width', wd + '%');
			}, 1000);
		} else if (player.getPlayerState() == 5 || player.getPlayerState() == 2) { // cued, paused
			clearInterval(updateProg);
		}
	}

	// ctrl
	$('li').click(function() {
		$('li').removeAttr('id');

		$(this).attr('id', 'active');

		var i = $(this).index();

		var len = $('#side ul li').length;
		var wd = 100 / (len * (i + 1));

		player.seekTo(step[i]['ts']);

		var container = $('#cont'),
			target = $('.step:nth-of-type(' + (i + 1) + ')');

		container.animate({
			scrollTop: target.offset().top - container.offset().top + container.scrollTop() - 8 // padding
		});
	});

	$(document).on('keydown', function(e) {
		switch(e.which) {
			case 32: // space
				e.preventDefault();

				if (player.getPlayerState() == 1) { // playing
					player.pauseVideo();
				}

				if (player.getPlayerState() == 5 || player.getPlayerState() == 2) { // cued, paused
					player.playVideo();
				}

				break;
		}
	});
});
