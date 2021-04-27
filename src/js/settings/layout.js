var setTheme = localStorage.getItem('layout')
console.log('Layout:', setTheme)
if (setTheme == null){
  swapLayout('./src/css/settings/layout/sidebar.css')
}else{
  swapLayout(setTheme)
}
function swapLayout(sheet){
  document.getElementById('layout-setting').href = sheet
  localStorage.setItem('layout', sheet)
}