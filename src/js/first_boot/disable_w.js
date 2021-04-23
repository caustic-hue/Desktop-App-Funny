var setTheme = localStorage.getItem('windows_first_boot')
console.log('drag-area:', setTheme)
if (setTheme == null){
    swapFirstBootDA ('./src/css/first_boot/drag-area/on.css')
}else{
    swapFirstBootDA (setTheme)
}
function swapFirstBootDA (sheet){
  document.getElementById('first-boot-w').href = sheet
  localStorage.setItem('windows_first_boot', sheet)
}