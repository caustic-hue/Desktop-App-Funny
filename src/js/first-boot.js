if(!localStorage.getItem("firstTime")){
  console.log('New user, showing welcome screen') // This will show trigger if you set cache or remove session cookies
  window.open('https://software.falixnodes.net/welcome/', 'width=500,height=300frame=true,nodeIntegration=no');
  localStorage.setItem("firstTime","true");
}else{
  console.log('Existing user, aborting welcome screen.')
}