var setTheme = localStorage.getItem('sidebar')
console.log('Sidebar:', setTheme)
if (setTheme == null){
    swapSidebarLayout('../css/settings/sidebar-size/confortable.css')
}else{
    swapSidebarLayout(setTheme)
}
function swapSidebarLayout(sheet){
  document.getElementById('sidebar-setting').href = sheet
  localStorage.setItem('sidebar', sheet)
}