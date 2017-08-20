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
			ts: 0,
			desc: "\
				<p>Today's build guide is one that you've asked for, pleaded for, demanded - you said if you don't do some value oriented content about stuff I can actually afford, I'm going to unsubscribe. Well, I heard you. I heard you.</p>\
				<p>This video isn't about getting a zillion frames per second in Crysis 6 while running on 3 8k TVs and surround. This video isn't about liquid cooling your CPU, your graphics card and that cheeky smirk off your buddy's face all at once.</p>\
				<p>It's about getting good value and upgradability out of your new gaming PC without spending a whole lot of money.</p>\
				<p>Welcome to the ultimate value gaming PC build guide - Intel Edition.</p>\
				"
		},
		{
			name: 'Pre-Build',
			ts: 80,
			desc: "\
				<p>To start with, a safe static free workstation is a must.	I use a mod mat and an anti-static ankle strap.</p>\
				<p>Now the only tool we really need for assembly is a multi-bit screwdriver, but a magnetic parts tray a pair of side cutters and a pair of needle nose pliers is nice to have before you begin.</p>\
				<p>I always recommend verifying that the system posts or powers on and outputs to the display.</p>\
				<p>You can use your motherboard box as a free non conductive test bench.	And since this is a basic motherboard without an onboard power button, the handy trick I'd like to show you is that you can use your screwdriver to short these pins if you don't have your power button connected yet and you want to try the board.</p>\
				"
		},
		{
			name: 'CPU',
			ts: 120,
			desc: "\
				<p>Our CPU choice was all about compromises: the multiple processing cores it gives up hyper threading and it gives up turbo boost. It also gives up the massive cache that the higher end has well and has only processors in its family and joy.</p>\
				<p>But dern it, this chip has spunk. And with a little overclocking it'll hold up surprisingly well and all but the most demanding triple-a titles even when fighting well above its weight class.	As we demonstrated in this little video, a couple of weeks ago you can easily swap it out for a core i3 or a core i5.</p>\
				<p>If you want a little bit more horsepower though without changing anything else in this build guide, hold your CPU by the edges and identify the corner with the gold triangle, align that with the corner of the socket that has a triangle as well lift up the retention arm lift up the socket cover place the CPU into the socket with no force lower the cover and fasten the retention arm again.</p>\
				"
		},
		{
			name: 'Cooling',
			ts: 184,
			desc: "\
			<p>Fancy coolers are the kind of thing that rich kids with their h2 bows and LN tubes might get to enjoy. But if your dad is a blue-collar honest working man kind of guy, well you might just find that stock cooling does a good enough job for a mild overclock and doesn't cost you a penny, unless you grab a can of stove paint for 6 bucks and make it look badass that is.	Besides, you can always game on it now and splurge you know 30 bucks on a cooler next time you've got some walking-around money.</p>\
			<p>Check the bottom of your heatsink to ensure the pre applied thermal compound is intact, then unwrap the four pin fan connector from the clips around the outside of the fan.</p>\
			<p>Orient the cooler so that your fan wire will have the closest path to the CPU fan header on your motherboard, then put it down on top of your CPU with the plastic push pins at each corner sticking through the holes on the motherboard.</p>\
			<p>Push down on opposite corners until you hear it click, plug the fan connector into the board then double check the nubbins at the back of the board to make sure that they look like this.</p>\
			"
		},
		{
			name: 'RAM',
			ts: 249,
			desc: "\
			<p>Buying RAM is easy for a value gaming build, don't get fussed about which kit we're using.	Just go to your favorite store or shopping website.</p>\
			<p>Find the least expensive dual channel DDR3 kit in the capacity of your choice from a reputable brand like Kingston or Corsair d skill or a data and buy it.</p>\
			<p>XMP support is a bonus, but the speed of the RAM doesn't matter too much.</p>\
			<p>Pull back the tabs on the 2 grey RAM slots, then position each dim so the notch in the socket and press firmly on both fens until the tabs at the ends snap back into place on their own.</p>\
			"
		},
		{
			name: 'Case',
			ts: 290,
			desc: "\
				<p>Sometimes I choose a component for these build guides because it's a super expensive piece of hardware that I just want to touch. Sometimes I do it because the features and performance call to me and it's a perfect match for the rest of my build.</p>\
				<p>And sometimes I'm just morbidly curious. So today we'll be building in the spec oh one because I just wanted to know if this $50 gaming case can deliver an experience that still lives up to the Corsair name.</p>\
				<p>Pull the side panels off and stash the thumb screws somewhere safe along with the rest of the included hardware.</p>\
				<p>The cases only included 120 millimeter cooling fan is already installed in the front, which is a good place for it since that intake is filtered to keep the PCs guts both clean and cool. If we had beefier Hardware a rear or top exhaust fan though would be a good addition.</p>\
			"
		},
		{
			name: 'Motherboard',
			ts: 342,
			desc: "\
			<p>Now the motherboard choice is always tough, and in a value build it's even tougher. The board doesn't impact performance, so I could literally buy the cheapest thing that will accept my CPU and graphics card and ran and call it a day, but it does affect features.</p>\
			<p>So we went with a z97-c from a soos because it has official support for overclocking, although lower end boards even business grade ones are known to do it. And it's got a good balance of features - quality and expandability to price.</p>\
			<p>Press firmly on the four corners of the I/O shield until they snap into place, then plug the eight pin power supply connector in.</p>\
			<p>Now, to avoid a cable management nightmare later on: place the board down on the integrated standoffs and install the screws that look like this into the five positions around the perimeter of the board. The middle one can be left blank; This is just a post to hold the board in place while you secure it while you have easy access to the board.</p>\
			<p>Plug in the front power and reset switches as well as the power and drive activity LEDs.	Follow up with the block style connectors for USB to front audio and USB 3, then finally plug your front fin into the header on the motherboard here so we can use software to control it later... too practical, folks.</p>\
			"
		},
		{
			name: 'PSU',
			ts: 419,
			desc: "\
			<p>There's only really a couple things to consider when shopping for a budget power supply: price and quality. Me, I can be a bit of a sucker for looks, so when I saw that the 430 watt CXN is on with a $20 rebate for only 40 bucks I went for it. It's black semi modular and 80 plus bronze making it a solid deal compared to the C Sonic gray unit that I normally use for budget builds. For another 15 bucks to 600 watt version though would be good if you want a bit more growing room, but other than a quad core or a slightly better graphics card this system isn't really being built to be super upgradable, so the 430 watt is a great choice.</p>\
			<p>Slide the power supply in grille side up for better cooling and attach it to the case using four of these screws. You already ran the eight pin connector when we cheated a bit in the last step, so plug in the 24 pin connector.</p>\
			<p>Being cognizant of the space you'll need behind the motherboard tray for cable management when you try to close the rear panel, plug in a modular SATA cable and run that over to the front bays. Then plug in a PCI Express connector and run that to this cable management hole right here.</p>\
			"
		},
		{
			name: 'SSD',
			ts: 488,
			desc: "\
			<p>An SSD is still a no-brainer to me.	Even on a value build a hard drive, doesn't cost much more than a night out at the movies with a friend who won't stop shoving popcorn and nachos into his or her face. So in my mind it can be added later, but an SSD makes the whole system snap here and more responsive.we Went with an Intel 530 series 120 gig drive, but frankly a 300 or 700 series drive would also be fine.	Grab whatever series and capacity gets you the most gigabytes for your dollar and go with that.</p>\
			<p>Pull one of the hard drive sleds out of the side of the case and use four of these screws to secure the SSD to it.	Please note that if you're installing a hard drive at this stage you'll want to use these screws instead.</p>\
			<p>Slide the cage back in plug in the SATA power connector that you left hanging before, then plug the right angle end of a SATA data cable into the drive and the straight end into your motherboard.</p>\
			"
		},
		{
			name: 'GPU',
			ts: 547,
			desc: "\
			<p>Choosing the best graphics card for a value gaming rig can be done one of two ways. Method number one: find a recent video card roundup, find the lowest price you can for each of the cards in it, then divide the frame rates the reviewer gets in the games you want to play by the price. And by whichever one delivers the best FPS per dollar.</p>\
			<p>Method number two: buy everything else cheeping out wherever possible and then spend what error is left of your budget on the best graphics card you can find.</p>\
			<p>We ended up with a Radeon r7 260x because there was a good deal at Amazon when we went pricing this out so your mileage may vary on that, But the general rule is that the low 100s to high $200 range is generally where you're going to find the FPS per dollar sweet spot.</p>\
			<p>Installing expansion cards is the one area where Corsair, yeah... let me down a little bit with this case because it's otherwise very good for the price with folded edges to keep my fingers safe being an awesome inclusion.</p>\
			<p>Take out the two screws that hold in this random piece of metal at the back, then take out the two screws holding in these two PCI covers that correspond with our PCIe 16x slot.</p>\
			<p>Align the card carefully with the slot, push it in firmly, put the two screws back in put the random piece of metal back on and then plug in that PCI Express power connector that was cable managed earlier.</p>\
			"
		},
		{
			name: 'Cables',
			ts: 631,
			desc: "\
			<p>Cable management is a bit of a bear on this case or at least it appears at first glance to be. There isn't a ton of room behind the motherboard tray and there aren't a lot of places to tie down wires, so we're just going to kind of do our best with it.</p>\
			<p>The good news though is that the rear side panel bulges out, so installing it over top of our slightly rat's nest. II wire arrangement here is actually no big deal.</p>\
			"
		},
		{
			name: 'Peripherals',
			ts: 658,
			desc: "\
			<p>If you're not looking to on peripherals, I still recommend something halfway decent for the mouse, because it doesn't cost that much and makes a big difference.</p>\
			<p>Grab an M45 optical gaming mouse where are no frills optical mouse from someone like Valley. For example, the keyboard is one that's not as big a deal to me and a basic PS2 keyboard will do as well as most gaming membrane keyboards until you start spending overall pretty pennies on them for features like macro keys and backlighting at which point I would almost suggest just forgoing it for now and saving up a few more pretty pennies for a mechanical keyboard later on down the line.</p>\
			<p>For the monitor, anything with gaming specific features will cost a lot more than a commodity 23 inch 1080p display. So unless you really need HDMI pass-through virtually no input leg-like on Ben Q's RL series, just go with a TN for faster pixels or IPs for better colors commodity monitor. Pick one that looks nice to you and call it a day.</p>\
			"
		},
		{
			name: 'Setup',
			ts: 722,
			desc: "\
			<p>Press Delete or F2 to get into the UEFI BIOS for the motherboard.</p>\
			<p>Hit F7 to get into advanced mode, and turn your CPU multiplier up to something in the 42 to 44 range. You shouldn't need to touch any other settings, but while you're in here you might as well check and make sure your RAM is running at its rated speed.</p>\
			<p>An able XMP, if that option is available to install your Windows operating system.</p>\
			<p>Create a bootable USB drive, and then reboot while mashing F8 immediately to get into the boot device selection menu where you'll pick your USB drive once the setup process has begun. It's basically a matter of clicking next until you land on the Windows desktop.	Once you're booted, drivers can be found on the manufacturer websites for ASUS Intel, etcetera. And this is a good time to hit up ninite.com to pick up your favorite free applications and a nice easy to use junkwear free package.</p>\
			"
		},
		{
			name: 'Results',
			desc: "\
			<p>Last stage here is to find out just how well our little budget gaming rig performs. So we took it for a spin in the most popular games - many of which are very inexpensive or even free-to-play being streamed on Twitch TV and discovered that if your objective is to have a capable inexpensive gaming box to play League with your friends, that a machine like this is going to be right up your alley.</p>\
			<p>If you want to get the most out of Crysis 3, quad-core Core i5 or i7 CPU and a GPU upgrade might be in order but this will at least get you started as a member of the PC gaming community.</p>\
			<p>Now sit back and enjoy some bland of our finished system... which I really wish I had painted the heatsinks on the motherboard gold on - while I thank everyone involved in making this video possible: Intel our sponsor, Brandon, Luke, Terran and Etzel, the members of my team who helped make it, the musicians who provide their music to us free of charge and don't pursue copyright strikes against us even though I forget to credit them half the time, and of course you the viewer for sitting through this video and maybe even giving us a like or a dislike depending on how you felt about it.</p>\
			<p>Thanks for watching, don't forget to subscribe and I'll see you guys again.</p>\
			",
			ts: 778
		}
	]

	$.each(step, function(i, el) {
		$('#side ul').append('<li><a>' + el["name"] + '</a></li>');

		$('#cont').append('<div class="step" id="' + el["name"] + '"><h2>' + el["name"] + '</h2><p>' + el["desc"] + '</p></div>');
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
