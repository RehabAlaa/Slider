var imgList =Array.from( document.querySelectorAll('.card img') );
var lightBoxContainer = document.getElementById('light-box-Container');
var lightBoxItem = document.getElementById('light-box-item');
var closeBtn = document.getElementById('closeBtn');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var currentIndex ;
console.log(imgList , lightBoxContainer)

  for (var i = 0; i < imgList.length; i++) {
  
  imgList[i].addEventListener('click',function (e) {
    var imgSrc= e.target.getAttribute('src');
    console.log(imgSrc);
    lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
    lightBoxContainer.classList.remove('d-none');
     currentIndex = imgList.indexOf(e.target);
    console.log(currentIndex);

  });
    
    
  }

function nextSlider() {
   currentIndex++;
   if (currentIndex > imgList.length -1) {
    currentIndex = 0;
   }
  var imgSrc = imgList[currentIndex].getAttribute('src');
   lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

}
nextBtn.addEventListener('click',nextSlider);
document.addEventListener('keyup',function (e) {
  if (e.key === "ArrowRight") {
    nextSlider() ;
  }
})
function prevSlider() {
  currentIndex--;
  if (currentIndex < 0) {
   currentIndex = imgList.length -1;
  }
 var imgSrc = imgList[currentIndex].getAttribute('src');
  lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}
prevBtn.addEventListener('click',prevSlider);
document.addEventListener('keyup',function (e) {
  if (e.key === "ArrowLeft") {
    prevSlider() ;
  }
})
function closeSlider() {
  lightBoxContainer.classList.add('d-none')
  
}
closeBtn.addEventListener('click',closeSlider);
document.addEventListener('keyup',function (e) {
  if (e.key === "Escape") {
     closeSlider() ;
  }
})
