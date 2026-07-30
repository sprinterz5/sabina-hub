var arr = `Ek het jou lief</br>
Unë të dua</br>
እወድሻለሁ (iwedishalehu)</br>
أحبك (uhibek)</br>
Ես քեզ սիրում եմ (Yes k’ez sirum yem)</br>
Munsmawa</br>
Mən səni sevirəm</br>
Maite zaitut</br>
я цябе кахаю (ja ciabie kahaju)</br>
আমিতোমায়ভালোবাসি (Ami tomake bhalobashi)</br>
Volim te</br>
Обичам те (Obicham te)</br>
မင်းကိုချစ်တယ် (Mainnkohkyittaal)</br>
我愛你 (Ngo oiy ney a)</br>
T'estimo</br>
Gihigugma tika</br>
Ndimakukondani</br>
Ti tengu caru</br>
Volim te</br>
Miluji tě</br>
Jeg elsker dig</br>
Ik houd van je</br>
Ma armastan sind</br>
Melɔ̃ wò</br>
( dooset daram) دوستت دارم</br>
Au domoni iko</br>
Mahal kita</br>
Minä rakastan sinua</br>
Je t’aime</br>
Is breá liom tú</br>
Quérote</br>
Მიყვარხარ (Miq’varkhar)</br>
Σε αγαπώ (Se agapó)</br>
Rohayhu</br>
Mwen renmen ou</br>
Aloha wau iā ʻoe</br>
אני אוהב אותך (ani ohev otkha)</br>
मैं आपसे प्यार करती हूँ (main aapase pyaar karatee hoon)</br>
Kuv hlub koj</br>
Szeretlek</br>
Ég elska þig</br>
A hụrụ m gị n'anya</br>
Ay-ayaten ka</br>
Aku mencintaimu</br>
Ti amo</br>
愛してます (Aishitemasu)</br>
Мен сені жақсы көремін (Men seni jaqsı köremin)</br>
ខ្ញុំ​ស្រលាញ់​អ្នក (khnhom​ sralanh​ anak)</br>
Ndagukunda</br>
사랑해요 (salanghaeyo)</br>
Ez hej te dikim</br>
ຂ້ອຍ​ຮັກ​ເຈົ້າ (khony hak chao)</br>
Te amo</br>
Es mīlu Tevi</br>
Aš tave myliu</br>
Ech hunn dech gär</br>
Tiako ianao</br>
Saya sayang awak</br>
Inħobbok</br>
我愛你 (Wǒ ài nǐ)</br>
Aroha ana ahau ki a koe</br>
Би чамд хайртай (Bi chamd khairtai)</br>
Nimitztlazohtla Nimitznequi</br>
Ayóó'ánííníshní</br>
म तिमीलाई माया गर्छु (Ma timīlā'ī māyā garchu)</br>
Jeg elsker deg</br>
(zaa sta are meena laram) زه ستا سره مینه لرم</br>
Kocham cię</br>
Te amo</br>
ਮੈਂ ਤੁਹਾਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ (Maiṁ tuhānū pi'āra karadā hāṁ)</br>
Sin jaalladha</br>
Kuyaykim</br>
Te iubesc</br>
Oute alofa ia oe</br>
Ke a go rata</br>
Волим те (Volim te)</br>
Kea u rata</br>
Ľúbim ťa</br>
Ljubim te</br>
Waan ku jeclahay</br>
Te amo</br>
Nakupenda</br>
jag älskar dig</br>
Mahal kita</br>
Uua here vau ia oe</br>
我愛你 (góa ài li)</br>
நான் உன்னை நேசிக்கிறேன் (Nāṉ uṉṉai nēcikkiṟēṉ)</br>
ฉันรักคุณ (C̄hạn rạk khuṇ)</br>
ང་ཁྱོད་ལ་དགའ། (Nga cheo la ga)</br>
Oku ou 'ofa au 'ia koe</br>
Ndza ku rhandza</br>
Seni seviyorum</br>
я тебе люблю (ya tebe lyublyu)</br>
Men sizni sevaman</br>
Tôi yêu bạn</br>
Rwy'n dy garu di</br>
Ndiyakuthanda`
var confessions = [];
confessions = arr.split("</br>");
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
		document.getElementById(para).innerHTML = "";
		i=0;
		
		newString+=1;
		
	}
}
var typeInterval;

typeInterval = setInterval(function(){
	typeWriter(confessions[newString], "slider");
	
}, 100);


let cards = document.querySelector(".cards");
[...cards.children].reverse().forEach(i => cards.append(i));

cards.addEventListener("click", swap);
function swap (e){
	let card = document.querySelector(".card:last-child");
	if(e.target !== card) return;
	card.style.animation = "swap 700ms forwards";

	setTimeout(()=>{
		card.style.animation ="";
		cards.prepend(card);
	}, 700);

}