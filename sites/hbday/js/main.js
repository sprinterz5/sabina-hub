 // Data for each emotion (placeholder C array)
    const C = {
        "Grief & Sadness": `Psalm 34:18', '“The LORD is near to the brokenhearted and saves the crushed in spirit.”', 'Isaiah 65:14\xa0', '“My servants will sing out of the joy of their hearts, but you will cry out from anguish of heart and wail in brokenness of spirit.”', 'Matthew 5:4', '“Blessed are those who mourn, for they shall be comforted.”', 'John 14:1', '“Let not your hearts be troubled. Believe in God; believe also in me.”', 'Psalm 30:5b', '“Weeping may tarry for the night, but joy comes with the morning.”', '2 Corinthians 1:3-4b', '“Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction…”', 'Isaiah 41:10', '“Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.”', 'Psalm 73:26\xa0', '“My flesh and my heart may fail, but God is the strength of my heart and my portion forever.”', 'Psalm 147:3\xa0', '“He heals the brokenhearted and binds up their wounds.”', 'Romans 8:18\xa0', '“For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.”', 'Psalm 119:50', '“This is my comfort in my affliction, that your promise gives me life.”', '2 Corinthians 4:17-18\xa0', '“For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.”`,
"Fear, Anxiety and Worry": `Philippians 4:6-7', '“Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.”', 'Psalm 23:4', '“Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.”', 'Matthew 6:34\xa0', '“Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.”', '1 Peter 5:7\xa0', '“Casting all your anxieties on him, because he cares for you.”', 'Psalm 56:3\xa0', '“When I am afraid, I put my trust in you.”', 'Matthew 10:31\xa0', '“Fear not, therefore; you are of more value than many sparrows.”', 'Isaiah 43:1\xa0', "“But now thus says the LORD, he who created you, O Jacob, he who formed you, O Israel: ‘Fear not, for I have redeemed you; I have called you by name, you are mine.'”", 'Psalm 27:1\xa0', '“The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?”', '2 Timothy 1:7\xa0', '“For God gave us a spirit not of fear but of power and love and self-control.”', 'Psalm 94:19\xa0', '“When the cares of my heart are many, your consolations cheer my soul.”', 'Psalm 34:4\xa0', '“I sought the LORD, and he answered me and delivered me from all my fears.”`,
"Anger": `Ephesians 4:26-27', '“Be angry and do not sin; do not let the sun go down on your anger, and give no opportunity to the devil.”', 'James 1:19-20', '“Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God.”', 'Proverbs 14:29', '“Whoever is slow to anger has great understanding, but he who has a hasty temper exalts folly.”', 'Proverbs 15:1', '“A soft answer turns away wrath, but a harsh word stirs up anger.”', 'Proverbs 19:11', '“Good sense makes one slow to anger, and it is his glory to overlook an offense.”', 'Ecclesiastes 7:9', '“Be not quick in your spirit to become angry, for anger lodges in the heart of fools.”', 'Romans 12:19', "“Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, ‘Vengeance is mine, I will repay, says the Lord.'”", 'Proverbs 29:11', '“A fool gives full vent to his spirit, but a wise man quietly holds it back.”', 'Ephesians 4:31-32', '“Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice. Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.”', 'Psalm 4:4', '“Be angry, and do not sin; ponder in your own hearts on your beds, and be silent.”', 'Proverbs 22:24-25', '“Make no friendship with a man given to anger, nor go with a wrathful man, lest you learn his ways and entangle yourself in a snare.”', 'Proverbs 29:22\xa0', '“An angry person stirs up conflict, and a hot-tempered man commits many sins.”`,
"Thankfulness": `1 Thessalonians 5:18', '“Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.”', 'Psalm 106:1', '“Praise the LORD! Oh give thanks to the LORD, for he is good, for his steadfast love endures forever!”', 'Psalm 100:4', '“Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!”', 'Ephesians 5:20', '“Giving thanks always and for everything to God the Father in the name of our Lord Jesus Christ.”', '1 Chronicles 16:34', '“Oh give thanks to the LORD, for he is good; for his steadfast love endures forever!”', '1 Timothy 4:4-5', '“For everything created by God is good, and nothing is to be rejected if it is received with thanksgiving, for it is made holy by the word of God and prayer.”', 'Psalm 30:12', '“That my glory may sing your praise and not be silent. O LORD my God, I will give thanks to you forever!”', 'Colossians 2:6-7', '“Therefore, as you received Christ Jesus the Lord, so walk in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving.”', 'Psalm 118:1', '“Oh give thanks to the LORD, for he is good; for his steadfast love endures forever!”', 'James 1:17', '“Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change.”`,
"Love": `1 Corinthians 13:4-7', '“Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.”', 'John 3:16', '“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.”', '1 John 4:7-8', '“Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God. Anyone who does not love does not know God, because God is love.”', 'Matthew 22:37-39', "“And he said to him, ‘You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself.'”", 'Romans 12:9', '“Let love be genuine. Abhor what is evil; hold fast to what is good.”', '1 Peter 4:8', '“Above all, keep loving one another earnestly, since love covers a multitude of sins.”', '1 John 4:18', '“There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love.”', 'John 15:13', '“Greater love has no one than this, that someone lay down his life for his friends.”', 'Proverbs 10:12', '“Hatred stirs up strife, but love covers all offenses.”', 'Jeremiah 31:3\xa0', '“the Lord appeared to him from far away. I have loved you with an everlasting love; therefore I have continued my faithfulness to you.”`,
"Confidence": `2 Corinthians 5:17', '“Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.”', 'Ephesians 2:10', '“For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.”', '1 Peter 2:9', '“But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light.”', 'John 1:12', '“But to all who did receive him, who believed in his name, he gave the right to become children of God.”`,
"Peacefulness": `John 14:27', '“Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.”', 'Philippians 4:7', '“And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.”', 'Isaiah 26:3', '“You keep him in perfect peace whose mind is stayed on you, because he trusts in you.”', 'Colossians 3:15', '“And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful.”', 'Psalm 29:11', '“May the LORD give strength to his people! May the LORD bless his people with peace!”', 'Psalm 119:165', '“Great peace have those who love your law; nothing can make them stumble.”', 'John 16:33', '“I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.”`,
"Joy": `Psalm 16:11', '“You make known to me the path of life; in your presence, there is fullness of joy; at your right hand are pleasures forevermore.”', 'Philippians 4:4', '“Rejoice in the Lord always; again I will say, rejoice.”', '1 Peter 1:8-9', '“Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory, obtaining the outcome of your faith, the salvation of your souls.”', 'Proverbs 17:22', '“A joyful heart is good medicine, but a crushed spirit dries up the bones.”', 'Psalm 32:11', '“Be glad in the LORD, and rejoice, O righteous, and shout for joy, all you upright in heart!”', 'John 16:22', '“So also you have sorrow now, but I will see you again, and your hearts will rejoice, and no one will take your joy from you.”', '1 Thessalonians 5:16', '“Rejoice always.”', 'Psalm 92:4', '“For you, O LORD, have made me glad by your work; at the works of your hands, I sing for joy.”', 'Proverbs 15:13', '“A glad heart makes a cheerful face, but by sorrow of heart the spirit is crushed.”', 'Galatians 5:22-23', '“But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.”`,
"Patience": `Romans 12:12', '“Rejoice in hope, be patient in tribulation, be constant in prayer.”', 'Psalm 37:7', '“Be still before the LORD and wait patiently for him; fret not yourself over the one who prospers in his way, over the man who carries out evil devices!”', 'Galatians 6:9', '“And let us not grow weary of doing good, for in due season we will reap, if we do not give up.”', 'Ecclesiastes 7:8', '“Better is the end of a thing than its beginning, and the patient in spirit is better than the proud in spirit.”', 'Hebrews 6:15', '“And thus Abraham, having patiently waited, obtained the promise.”', '2 Peter 3:9', '“The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.”`,
"Loneliness": `Psalm 147:3', '“He heals the brokenhearted and binds up their wounds.”', 'Matthew 28:20', '“Teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”', 'Psalm 25:16', '“Turn to me and be gracious to me, for I am lonely and afflicted.”', 'Psalm 34:17', '“When the righteous cry for help, the LORD hears and delivers them out of all their troubles.”', 'Isaiah 43:2', '“When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.”', '2 Corinthians 1:3-4', '“Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.”`,
"Confusion": `1 Corinthians 14:33', '“For God is not a God of confusion but of peace.”', 'Proverbs 3:5-6', '“Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.”', 'James 1:5', '“If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.”', 'Psalm 25:4-5', '“Make me to know your ways, O LORD; teach me your paths. Lead me in your truth and teach me, for you are the God of my salvation; for you I wait all the day long.”', 'Isaiah 55:8-9', '“For my thoughts are not your thoughts, neither are your ways my ways, declares the LORD. For as the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts.”', '1 Corinthians 14:40', '“But all things should be done decently and in order.”', 'Psalm 119:105', '“Your word is a lamp to my feet and a light to my path.”`,
"Stress": `Matthew 11:28-30', '“Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.”', 'Psalm 55:22', '“Cast your burden on the LORD, and he will sustain you; he will never permit the righteous to be moved.”', '1 Peter 5:7', '“Casting all your anxieties on him, because he cares for you.”', 'Psalm 94:19', '“When the cares of my heart are many, your consolations cheer my soul.”', '2 Corinthians 4:8-9', '“We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed.”', 'Proverbs 12:25', '“Anxiety in a man’s heart weighs him down, but a good word makes him glad.”', 'Psalm 56:3', '“When I am afraid, I put my trust in you.”`,
"Jealousy": `James 3:14-16', '“But if you have bitter jealousy and selfish ambition in your hearts, do not boast and be false to the truth. This is not the wisdom that comes down from above, but is earthly, unspiritual, demonic. For where jealousy and selfish ambition exist, there will be disorder and every vile practice.”', '1 Corinthians 3:3', '“For you are still of the flesh. For while there is jealousy and strife among you, are you not of the flesh and behaving only in a human way?”', 'Proverbs 14:30', '“A tranquil heart gives life to the flesh, but envy makes the bones rot.”', 'Galatians 5:26', '“Let us not become conceited, provoking one another, envying one another.”', '1 Peter 2:1', '“So put away all malice and all deceit and hypocrisy and envy and all slander.”`,
"Shame": `Romans 10:11', "“For the Scripture says, ‘Everyone who believes in him will not be put to shame.'”", 'Isaiah 50:7', '“But the Lord GOD helps me; therefore I have not been disgraced; therefore I have set my face like a flint, and I know that I shall not be put to shame.”', 'Romans 8:1', '“There is therefore now no condemnation for those who are in Christ Jesus.”', 'Isaiah 61:7', '“Instead of your shame there shall be a double portion; instead of dishonor they shall rejoice in their lot; therefore in their land they shall possess a double portion; they shall have everlasting joy.”', '2 Timothy 1:12', '“But I am not ashamed, for I know whom I have believed, and I am convinced that he is able to guard until that day what has been entrusted to me.”', 'Psalm 25:3', '“Indeed, none who wait for you shall be put to shame; they shall be ashamed who are wantonly treacherous.”`,
"Hopelessness": `Psalm 42:11', '“Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.”', 'Jeremiah 29:11', '“For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.”', 'Romans 15:13', '“May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.”`,
"Humility": `Micah 6:8', '“He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?”', 'Matthew 23:12', '“Whoever exalts himself will be humbled, and whoever humbles himself will be exalted.”', 'James 4:6', "“But he gives more grace. Therefore it says, ‘God opposes the proud but gives grace to the humble.'”", 'Proverbs 22:4', '“The reward for humility and fear of the LORD is riches and honor and life.”', 'Philippians 2:3', '“Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves.”', '1 Peter 5:5', "“Likewise, you who are younger, be subject to the elders. Clothe yourselves, all of you, with humility toward one another, for ‘God opposes the proud but gives grace to the humble.'”", 'Ephesians 4:2', '“With all humility and gentleness, with patience, bearing with one another in love.”', 'Luke 14:11', '“For everyone who exalts himself will be humbled, and he who humbles himself will be exalted.”`,
"Pride": `Proverbs 16:18', '“Pride goes before destruction, and a haughty spirit before a fall.”', 'Proverbs 11:2', '“When pride comes, then comes disgrace, but with the humble is wisdom.”', 'Proverbs 29:23', '“One’s pride will bring him low, but he who is lowly in spirit will obtain honor.”`
    };

    // Get modal elements
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text");
    const span = document.getElementsByClassName("close")[0];

    // Function to open modal with the correct verse
    document.querySelectorAll('.emotion').forEach(emotion => {
        emotion.addEventListener('click', function() {
            modalText.innerHTML = "";
            const emotionText = this.dataset.emotion;
            allLines = C[emotionText].split("', '")
            for (var i = 0; i <= allLines.length - 1; i++) {
               if (i % 2 == 0){
                  modalText.innerHTML += '<div class="title">'+allLines[i]+'</div>' 
               }
               else{
                  modalText.innerHTML += '<div class="verses">'+allLines[i]+'</div>'
               }
            }
            
            modal.style.display = "block";
        });
    });

    // Close the modal when the user clicks on the close button
    span.onclick = function() {
        modal.style.display = "none";

    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };


const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0.7;
  setTimeout(() => {
    
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});

window.addEventListener("click", () => {
  removeBalloons();
});
