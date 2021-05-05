var setTheme = localStorage.getItem('sidebar-opacity')
console.log('Sidebar Opacity:', setTheme)
if (setTheme == null){
    swapSidebarOpacity('./src/css/settings/sidebar-opacity/90.css')
}else{
    swapSidebarOpacity(setTheme)
}
function swapSidebarOpacity(sheet){
  document.getElementById('sidebar-opacity-setting').href = sheet
  localStorage.setItem('sidebar-opacity', sheet)
}