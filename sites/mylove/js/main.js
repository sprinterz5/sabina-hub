var confessions = ['Aesthetic', 'Aglow', 'Adorable', 'Alluring', 'Angelic', 'Appealing', 'Arresting', 'Astonishing', 'Attractive', 'Awe-inspiring', 'Beautiful', 'Beckon', 'Beauteous', 'Becoming', 'Beguiling', 'Bonny', 'Belle', 'Buxom', 'Bewitching', 'Breathtaking', 'Celestial', 'Charming', 'Chic', 'Classy', 'Comely', 'Cute', 'Captivating', 'Conspicuous', 'Curvy', 'Darling', 'Dashing', 'Dazzling', 'Debonair', 'Dainty', 'Delectable', 'Divine', 'Dreamy', 'Dreamboat', 'Dressy', 'Elegant', 'Enchanting', 'Enticing', 'Exquisite', 'Eye-catching', 'Effulgent', 'Elaborate', 'Exalted', 'Exceptional', 'Fabulous', 'Fair', 'Foxy', 'Faddy', 'Fancy', 'Fantastic', 'Fascinating', 'Fashionable', 'Flamboyant', 'Flashy', 'Glamorous', 'Glowing', 'Glossy', 'Groovy', 'Goddess', 'Graceful', 'Good-looking', 'Gorgeous', 'Handsome', 'Head-turning', 'Heart-throb', 'Heavenly', 'Hot', 'Hunky', 'Heart-stopping', 'Hottie', 'Impeccable', 'Intoxicating', 'Ideal', 'Inviting', 'Irresistible', 'Looker', 'Lovely', 'Loveable', 'Luscious', 'Lady-like', 'Lavish', 'Lure', 'Luxuriant', 'Magnificent', 'Majestic', 'Marvelous', 'Mesmerizing', 'Magnetic', 'Mesmeric', 'Modish', 'Perfect', 'Photogenic', 'Picturesque', 'Pretty', 'Pulchritudinous', 'Pleasing', 'Polished', 'Posh', 'Prim', 'Radiant', 'Ravishing', 'Remarkable', 'Resplendent', 'Riveting', 'Rad', 'Rakish', 'Ritzy', 'Sexy', 'Shapely', 'Spectacular', 'Splendiferous', 'Staggering', 'Striking', 'Scrumptious', 'Stunning', 'Suave', 'Sublime', 'Tantalizing', 'Tempting', 'Timeless', 'Tretis', 'Toothsome', 'Well-formed', 'Winsome', 'Wonderous', 'Well-dressed', 'Well-groomed', 'Winning', 'Wonderful'];
var nLines = confessions.length;

console.log(confessions)
var newString = 0;
let i = 0;
function typeWriter(text, para){
	if(newString==confessions.length){
		newString=0;
		console.log("end");
	}
	if(i<text.length){
		document.getElementById(para).innerHTML += text.charAt(i);

		i++;
		
	}
	
	else{
		clearInterval(typeInterval);
		setTimeout(function(){
			document.getElementById(para).innerHTML = "";
			typeInterval = setInterval(function(){
				typeWriter(confessions[newString], "slider");
			}, 100);
		}, 500);
		
		i=0;
		
		newString+=1;
		
	}
}
var typeInterval;

typeInterval = setInterval(function(){
	typeWriter(confessions[newString], "slider");
}, 100);


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}