const Quote = document.getElementById("quote");
function newQuote() {
  fetch("https://api.animechan.io/v1/quotes/random")
    .then(response => response.json())
    .then(data =>{
      Quote.textContent = data.data.content +" -"+ data.data.character.name + " ("+data.data.anime.name+")";
      console.log(data);
 } );
    
};
newQuote();
var index = 0;
const slideshow = document.getElementById("slideshow");
function newImage(){


  switch (index){
    case 0:
      slideshow.innerHTML = '<img src="images/3dsmax.png" alt="3DS Max">';
      index++;
      break;
    case 1:
      slideshow.innerHTML = '<img src="images/CSS3.png" alt="CSS3">';
      index++;
      break;
    case 2:
      slideshow.innerHTML = '<img src="images/HTML5.png" alt="HTML5">';
      index++;
      break;
    case 3:
      slideshow.innerHTML = '<img src="images/java.png" alt="Java">';
      index++
      break;
    case 4:
      slideshow.innerHTML = '<img src="images/javascript.png" alt="Javascript">';
      index++;
      break;
    case 5:
      slideshow.innerHTML = '<img src="images/python.png" alt="Python">';
      index++;
      break;
    case 6:
      slideshow.innerHTML = '<img src="images/storyboardpro.png" alt="StoryBoard Pro">';
      index = 0;
      break;
  }
}
setInterval(newImage, 1000);