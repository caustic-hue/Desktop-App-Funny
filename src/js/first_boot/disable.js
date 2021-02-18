var setTheme = localStorage.getItem('first-boot')
console.log('first-boot:', setTheme)
if (setTheme == null){
  swapFirstBoot('./src/css/first_boot/on.css')
}else{
  swapFirstBoot(setTheme)
}
function swapFirstBoot(sheet){
  document.getElementById('first-boot-s').href = sheet
  localStorage.setItem('first-boot', sheet)
}