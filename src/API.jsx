// '/src/API.jsx' 

//App Api
const appsData = [
    {
        id: 1,
        name: 'CCleaner',
        description: 'CCleaner is a utility program designed to delete unwanted files from a computer. The software gets rid of temporary files that eat up disk space and invalid Windows registry keys. During the cleanup, malicious files buried in the system are also deleted.',
        downloadmac: 'https://www.ccleaner.com/go/get_ccmac',
        downloadpc: 'https://www.ccleaner.com/ccleaner/download/standard?x-campaign=1&x-origin=2&x-variant=1',
        downloadandroid: 'https://play.google.com/store/apps/details?id=com.piriform.ccleaner&hl=en&gl=US',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4a/CCleaner_logo_2013.png' // URL of the app's icon image
    },
    {
        id: 2,
        name: 'Visual Studio Code',
        description: 'Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control. It aims to provide just the tools a developer needs for a quick code-build-debug cycle and leaves more complex workflows to fuller featured IDEs, such as Visual Studio IDE.',
        downloadmac: 'https://code.visualstudio.com/docs/?dv=osx',
        downloadpc: 'https://code.visualstudio.com/docs/?dv=win',
        downloadlinuxdeb: 'https://code.visualstudio.com/docs/?dv=linux64_deb',
        downloadlinuxrpm: 'https://code.visualstudio.com/docs/?dv=linux64_rpm',
        iconUrl: 'https://ih1.redbubble.net/image.1470587088.2816/st,small,507x507-pad,600x600,f8f8f8.jpg' // URL of the app's icon image
    },
    {
        id: 3,
        name: 'Epic Games',
        description: 'Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control. It aims to provide just the tools a developer needs for a quick code-build-debug cycle and leaves more complex workflows to fuller featured IDEs, such as Visual Studio IDE.',
        downloadmac: 'https://store.epicgames.com/en-US/c/mac-games?sortBy=releaseDate&sortDir=DESC&count=40',
        downloadpc: 'https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi',
        iconUrl: 'https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/original/ee5372ee-bb83-4d18-80a8-99120739ab45.png' // URL of the app's icon image
    },
    {
        id: 4,
        name: 'Spotify',
        description: 'Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. Basic functions such as playing music are totally free, but you can also choose to upgrade to Spotify Premium.',
        downloadmac: './SpotifyInstaller.zip',
        downloadpc: 'https://download.scdn.co/SpotifySetup.exe',
        downloadlinuxdeb: 'https://www.spotify.com/de-en/download/linux/',
        downloadios: 'https://apps.apple.com/app/spotify-music/id324684580',
        downloadandroid: 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en',
        iconUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png' // URL of the app's icon image
    },
    {
        id: 5,
        name: 'Steam',
        description: 'Steam is a digital platform created by Valve Corporation to serve as a distributor of PC games. The Steam client allows users to install PC games online directly to their cloud drives after purchase. Steam users are welcome to post their reviews, upload self-made content, buy DLCs, and much more!',
        downloadmac: 'https://cdn.akamai.steamstatic.com/client/installer/steam.dmg',
        downloadpc: 'https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png' // URL of the app's icon image
    },
    {
        id: 6,
        name: 'Winrar',
        description: 'WinRAR can compress files in the two most popular compression formats: RAR and ZIP. Users can manually choose which type of format they want to com- press their files. WinRAR can also decompress a large number of archive formats, including RAR, ZIP, 7-ZIP, CAB, ARJ, LZH, ACE, TAR, GZip, UUE, ISO, and BZIP2.',
        downloadmac: 'https://www.win-rar.com/fileadmin/winrar-versions/rarmacos-x64-623.tar.gz',
        downloadpc: 'https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-623.exe',
        downloadlinuxdeb: 'https://www.win-rar.com/fileadmin/winrar-versions/rarlinux-x64-623.tar.gz',
        downloadandroid: 'https://www.win-rar.com/fileadmin/winrar-versions/rar-android-623.117.apk',
        iconUrl: 'https://static.wixstatic.com/media/ba55bc_fa56ed623df44f778b37e99118f764ba~mv2.jpg/v1/crop/x_249,y_0,w_1103,h_900/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/logo-winrar-2018-1600.jpg' // URL of the app's icon image
    },
    // Add more app data entries as needed
];

export default appsData;