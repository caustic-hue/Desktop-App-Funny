# v2.3 In-Progress

 - New fresh design
   - Converted tabs into a sidebar
   - Added [Glasstron] for backdrop blur(Can be seen behind sidebar)
   - Slightly transparent sidebar
 - Removed version number from Dashboard
 - Removed text "FalixNodes Software" from Dashboard
 - Removed dropdown menu from tabs and moved menu items to Dashboard
 - New Panel Controls
    - When panel is selected(and loaded), new controls will show
    - The following controls were added: Refresh, Go Backward, Go Forward, Kill(Unload Panel)
 - Panel is now unloaded when app boots everytime to improve performance
 - Add new crash screen, will show if panel doesn't load for more than 20 seconds
 - Updated Electron from [`v9.0.5`](https://www.npmjs.com/package/electron/v/9.0.5) to [`v9.4.3`](https://www.npmjs.com/package/electron/v/9.4.3)
 - Removed auto update from Windows(discontinued)
 - Switching macOS' setup file from ZIP to DMG
 - Updated [titlebar detection](https://github.com/KorbsStudio/electron-titlebar-os-detection)([with Glasstron](https://github.com/KorbsStudio/electron-titlebar-os-detection-glasscord))
 - Added loading text in Dashboard for news