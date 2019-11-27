document.addEventListener('DOMContentLoaded', function() {
	var nav = document.querySelector('.sidenav'),
		aboutSlide = document.querySelectorAll('.about-carousel'),
		portfolioSlide = document.querySelectorAll('.portfolio-carousel'),
		collapsible = document.querySelectorAll('.collapsible');

	M.Sidenav.init(nav, {});
	M.Carousel.init(aboutSlide, {fullWidth: true, duration: 200});
	M.Carousel.init(portfolioSlide, {duration: 200});
	M.Collapsible.init(collapsible, {onOpenStart: handleCollapsibleOpen, onCloseStart: handleCollapsibleClose});

	var carouselInstance = M.Carousel.getInstance(document.querySelector('.carousel'));

	document.querySelectorAll('.carousel-selector').forEach(function(radio) {
		radio.addEventListener('change', function(e) {
			var target = e.target.getAttribute('data-target');
			carouselInstance.set(target)
		})
	})

	document.querySelectorAll('.scroll').forEach(function(anchor) {
		anchor.addEventListener('click', animateScroll);
	});

	var year = document.getElementById('year');
		year.innerHTML = new Date().getFullYear();
	window.addEventListener('scroll', isVisible);
	window.addEventListener('resize', isVisible);
	window.dispatchEvent(( new Event('scroll')));
	showSkill();
	showFavouriteStack();
	showEducation();
	showExperience();
	showPortfolio();
});

function showFavouriteStack() {
	var stackContainer = document.getElementById('fav-stack');

	var stacks = ['Handlebars', 'EJS', 'Bulma', 'Materializecss', 'Bootstrap', 'React', 'NextJS', 'React Native', 'Firebase', 'JQuery', 'MongooseJS', 'ExpressJS', 'KoaJS', 'Micro', 'Zeit', 'Serveless', 'App Engine', 'Cloud Functions', 'Digital Ocean', 'Mlab', 'MongoDB Atlass', 'MongoDB Stitch'];
	var fragment = document.createDocumentFragment();

	stacks.forEach(function(stack) {
		var div = document.createElement('div');
		div.classList.add('chip');
		div.innerHTML = `<div class="chip" title="${stack}">${stack}</div>`;
		fragment.appendChild(div);
	});

	stackContainer.appendChild(fragment);
}

function showSkill() {
	var skills = [
		{
			name: 'HTML',
			percent: 85,
			colour: 'blue',
			colLenght: 's11',
			fadeDirection: 'fadeInDown',
			delay: '2'
		},
		{
			name: 'CSS3',
			percent: 65,
			colour: 'red',
			colLenght: 's8',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
		{
			name: 'JavaScript',
			percent: 79,
			colour: 'yellow',
			colLenght: 's10',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
		{
			name: 'MongoDB',
			percent: 70,
			colour: 'green',
			colLenght: 's9',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
		{
			name: 'NodeJS',
			percent: 75,
			colour: 'blue-grey',
			colLenght: 's10',
			fadeDirection: 'fadeInDown',
			delay: '2'
		},

		{
			name: 'MS [OS, Office]',
			percent: 70,
			colour: 'light-blue',
			colLenght: 's9',
			fadeDirection: 'moveUp',
			delay: '2'
		},

		{
			name: 'Linux',
			percent: 60,
			colour: 'deep-orange',
			colLenght: 's8',
			fadeDirection: 'moveUp',
			delay: '2'
		},
		{
			name: 'Web3',
			percent: 80,
			colour: 'indigo',
			colLenght: 's10',
			fadeDirection: 'moveUp',
			delay: '2'
		},
		{
			name: 'WordPress',
			percent: 91,
			colour: 'teal',
			colLenght: 's12',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
		
	]

	skills.forEach(function(skill) {appendSkillToContainer(skill)})
}

function appendSkillToContainer(skill) {
	var skillContainer = document.getElementById('skills');

	var content = `<div class="col ${skill.colLenght}">
							<h6> ${skill.name} <span class="right">${skill.percent}%</span> </h6>
						</div>
						<div class="progress grey lighten-2" style="height: 7px">
							<div class="determinate ${skill.colour}" style="width: ${skill.percent}%;"></div>
						</div>`;

	var div = document.createElement('div');
	var classes = ['col', 's6', 'mb-4', 'mt-4', 'animatable', `${skill.fadeDirection || 'fadeInUp'}`, `delay-${skill.delay || 2}s`]
		classes.forEach(function(cl) { div.classList.add(cl); })
		
	div.innerHTML = content;
	skillContainer.insertAdjacentElement('beforeend', div);
}

function showEducation() {
	var educationContainer = document.getElementById('education'),
		education = [
			{
				school: "Freecodecamp",
				description: "Frontend Libraries",
				icon: "icon-code circle yellow darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Freecodecamp",
				description: "JavaScript Algorithms and Data Structure",
				icon: "icon-file-code circle light-blue darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Federal University of Technology, Minna",
				description: "BTech - Earth Sciences",
				icon: "icon-bank circle purple",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Lovelamp Systems",
				description: "Frontend and Backend Programming Basics",
				icon: "icon-code circle yellow darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Lovelamp Systems",
				description: "Computer Repairs and Maintenance",
				icon: "icon-laptop circle red",
				statusClass: "icon-check blue-text" //completed, ongoing
			}
		]
	var unorderedList = document.createElement('ul');
		unorderedList.classList.add('collection', 'animatable', 'fadeInUp', 'delay-2s');
	var fragment = '';
	Array.prototype.forEach.call(education, function(edu) {
		fragment += `<li class="collection-item avatar">
						<i class="${edu.icon}"></i>
						<span class="title"><strong>${edu.description}</strong></span>
						<p>
							${edu.school}
						</p>
						<span class="secondary-content"><i class="${edu.statusClass}"></i></span>
					</li>`;
	})

	unorderedList.innerHTML = fragment;
	educationContainer.insertAdjacentElement('beforeend', unorderedList);
}

function showExperience() {
	var experiencesContainer = document.querySelector('#experience > .collapsible'),
		experiences = [
			{
				position: "Lead Developer - Exclusive Platform &nbsp;&nbsp;<span class='grey-text'> 2018 - 2019 </span>",
				description: "- Produces detailed program codes and specifications<br/>- Test software products to ensure strong functionality and optimization",
				icon: "icon-angle-down",
			},
			{
				position: "Web Developer - Simulate Link Nigeria Enterprises &nbsp;&nbsp;<span class='grey-text'> 2016 - 2018 </span>",
				description: "- Implement website and integrate solutions into business operations<br/>- Ensures smooth running of web application for daily work-flow",
				icon: "icon-angle-down",
			},
			{
				position: "Instructor - Lovelamp Systems &nbsp;&nbsp;<span class='grey-text'> 2015 - 2016 </span>",
				description: "- Educate students on HTML, CSS and JavaScript programming language, utilizing instructional techniques, including hands-on curriculum<br/>- Design and update all instructional materials for IT programs on regular basis<br/>- Create guides and course materials to reiterate lecture information and help students",
				icon: "icon-angle-down",
			},
			{
				position: "Professional Freelancer &nbsp;&nbsp;<span class='grey-text'> 2011 - 2014 </span>",
				description: "- Propose, design and develop a website or an application for corporate organization/enterprise <br/>- Repairs laptop for lecturers and students<br/>- Fixes mobile phones (Blackberry and Android OS) software problems<br/>- Prepares presentation and word document using Microsoft office",
				icon: "icon-angle-down"
			}
		]
	var fragment = '';
	experiences.forEach(function(exp) {
		fragment += `<li>
				      <div class="collapsible-header"><i class="${exp.icon}"></i>${exp.position}</div>
				      <div class="collapsible-body"><span>${exp.description}</span></div>
				    </li>`;
	})
	experiencesContainer.innerHTML = fragment;
}

function showPortfolio() {
	var portfolioContainer = document.querySelectorAll('#portfolio .carousel-item');
	var	portfolio = [
			{
				name: "Airdrop AI",
				description: "Automate verification and participations of Airdrop, giveaway and contest.",
				link: "https://airdropai.com"
			},
			{
				name: "Exsender",
				description: "A fully automated token and ETH distributor on the Ethereum Blockchain",
				link: "https://exsender.com"
			},
			{
				name: "POS Payments",
				description: "Send payments in few seconds to any bank in Nigeria. OTP[ed] and user management.",
				link: "#!"
			},
			{
				name: "Exclusive Platform",
				description: "A Platform as a Service.",
				link: "https://exclusiveplatform.com"
			},
			{
				name: "CBT",
				description: "<strong>Starter project</strong> - Computer Based Test Application developed as starter project",
				link: "http://rssl-cbtapp.herokuapp.com"
			},
			{
				name: "SMS",
				description: "<strong>Starter Project (v2 in development)</strong> - School Management System for managing results, payments, home work, staff and students.",
				link: "http://rssl-smsapp.herokuapp.com"
			},
			{
				name: "Bot in Seconds",
				description: "Deploy a Telegram referral | non-referral bot within a couple of seconds. Advance options and controls",
				link: "#!"
			},
			{
				name: "Investment Bot",
				description: "Cryptocurrency Investment Telegram bot that integrate with Coinbase API",
				link: "https://t.me/Crypto_Investment_Test_Bot"
			},
			{
				name: "Betting Bot",
				description: "A sport betting bot built on Telegram. Play with token/coin, set minimum correct prediction and many more",
				link: "https://t.me/Crypto_Betting_Test_Bot"
			}

		];

	portfolio.forEach(function(pf, index) {
		var fragment = `<div class="card z-depth-${index + 1}" style="width:300px;">
				    		<div class="card-content">
				    			<span class="card-title"><strong>${pf.name}</strong></span>
				    			<p>${pf.description}</p>
				    		</div>
				    		<div class="card-action">
				    			<a href="${pf.link}" class="blue-text" target="_blank">Link to project</a>
				    		</div>
				    	</div>`;
		portfolioContainer[index].innerHTML = fragment;
	})
}

function handleCollapsibleOpen(e) {
	e.firstElementChild.firstElementChild.classList.remove("icon-angle-down");
	e.firstElementChild.firstElementChild.classList.add("icon-angle-up");
}

function handleCollapsibleClose(e) {
	e.firstElementChild.firstElementChild.classList.remove("icon-angle-up");
	e.firstElementChild.firstElementChild.classList.add("icon-angle-down");
	
}


function animateScroll(e) {
	var target = e.currentTarget.getAttribute('href');
		target = target.substring(1); //strip #, '#about' becomes 'about'
	var element = document.getElementById(target);

	if (element && typeof element.scrollIntoView != 'undefined') {
		e.preventDefault();
		element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
	}
}

function isVisible() {
	var animation_elements = document.querySelectorAll('.animatable');
  	animation_elements.forEach(function(element) {
		if (checkVisible(element)) {
	      	element.classList.remove('animatable');
	      	element.classList.add('animated');   
	    } else {
	    	element.classList.remove('animated');
	      	element.classList.add('animatable');	      	
	    }
  	})
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


