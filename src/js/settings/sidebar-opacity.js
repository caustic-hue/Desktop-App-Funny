var setTheme = localStorage.getItem('theme-sidebar-opacity')
console.log('theme:', setTheme)
if (setTheme == null){
  swapOpacitySidebar('./src/css/settings/sidebar/opacity/90.css')
}else{
  swapOpacitySidebar(setTheme)
}
function swapOpacitySidebar(sheet){
  document.getElementById('theme-setting-2').href = sheet
  localStorage.setItem('theme-sidebar-opacity', sheet)
}