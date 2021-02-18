var setTheme = localStorage.getItem('theme-sidebar-collapse')
console.log('theme:', setTheme)
if (setTheme == null){
    swapCollapseSidebar('./src/css/settings/sidebar/collapse/open.css')
}else{
    swapCollapseSidebar(setTheme)
}
function swapCollapseSidebar(sheet){
  document.getElementById('theme-setting-1').href = sheet
  localStorage.setItem('theme-sidebar-collapse', sheet)
}