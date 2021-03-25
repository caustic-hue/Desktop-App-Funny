var setTheme = localStorage.getItem('accent-color')
console.log('theme:', setTheme)
if (setTheme == null){
    swapAccentColor('./src/css/settings/accent-color/default.css')
}else{
    swapAccentColor(setTheme)
}
function swapAccentColor(sheet){
  document.getElementById('theme-setting-3').href = sheet
  localStorage.setItem('accent-color', sheet)
}