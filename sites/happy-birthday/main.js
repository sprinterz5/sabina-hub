const text = document.querySelector(".text p");
		text.innerHTML = text.innerText.split("").map(
			(char, i) =>
			`<span style="transform:rotate(${i*5.625}deg)">${char}</span>`).join("")






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





for(var i=1;i<26;i++){
	var elem = document.createElement("img");
	elem.setAttribute("src", "img/" + i + ".jpeg");
	document.getElementById("image-container").appendChild(elem);
}