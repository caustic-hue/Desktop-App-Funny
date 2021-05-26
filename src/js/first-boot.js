var setTheme = localStorage.getItem('slideshow')
console.log('Slideshow:', setTheme)
if (setTheme == null){
  swapSlideshow('./css/first-boot/slideshow-on.css')
}else{
  swapSlideshow(setTheme)
}
function swapSlideshow(sheet){
  document.getElementById('first-boot-slideshow').href = sheet
  localStorage.setItem('slideshow', sheet)
}