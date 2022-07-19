exports.menu = (ucapanWaktu, pushname, mundur, ownername, botname, prefix, jam, tanggal, latensi, runtime) => {
    return`${ucapanWaktu} ${pushname}

Hitung Mundur Bulan Ramadhan
${mundur}

👑 Creator : ${ownername}
🤖 Bot Name : ${botname}
📍 Prefix : ( ${prefix} )
🌎 Language : Javascript
🗄️ Lib : Baileys-MD
⌚ Time : ${jam}
📆 Date : ${tanggal}
📶 Speed : ${latensi.toFixed(4)} second
⏳ Runtime :
${runtime(process.uptime())}

*「 list menu bot 」*
 • ${prefix}groupmenu
 • ${prefix}ownermenu
 • ${prefix}gamemenu
 • ${prefix}informasimenu
 • ${prefix}anonymousmenu
 • ${prefix}downloadmenu
 • ${prefix}convertmenu
`
}
exports.menuinformasi = (prefix) => {
    return `
*「 Information 」*
 • ${prefix}ping
 • ${prefix}owner
 • ${prefix}menu
 • ${prefix}donate
 • ${prefix}delete
 • ${prefix}infochat
 • ${prefix}quoted
 • ${prefix}listpc
 • ${prefix}listgc
 • ${prefix}listonline
`
}
exports.menuanonymous = (prefix) => {
    return `
*「 Anonymous Menu 」*
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}leave
 `
}
exports.menugroup = (prefix) => {
    return `
*「 Group Menu 」*
 • ${prefix}linkgroup
 • ${prefix}ephemeral
 • ${prefix}setppgc
 • ${prefix}setname
 • ${prefix}setdesc
 • ${prefix}group
 • ${prefix}editinfo
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}hidetag
 • ${prefix}tagall
 • ${prefix}antilink
 • ${prefix}mute
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}vote
 • ${prefix}devote
 • ${prefix}upvote
 • ${prefix}cekvote
 • ${prefix}hapusvote
`
}
exports.menuowner = (prefix) => {
    return `
*「 Owner Menu 」*
 • ${prefix}chat
 • ${prefix}join
 • ${prefix}leave
 • ${prefix}block
 • ${prefix}unblock
 • ${prefix}bcgc
 • ${prefix}broadcast
 • ${prefix}setppbot
 • ${prefix}exif
`
}
exports.menuphotooxy = (prefix) => {
    return `
  * ｢ Photo Oxy ｣ *  	
 • ${prefix}shadow text
 • ${prefix}cup text
 • ${prefix}cup1 text
 • ${prefix}romance text
 • ${prefix}smoke text
 • ${prefix}burnpaper text
 • ${prefix}lovemessage text
 • ${prefix}undergrass text
 • ${prefix}love text
 • ${prefix}coffe text
 • ${prefix}woodheart text
 • ${prefix}woodenboard text
 • ${prefix}summer3d text
 • ${prefix}wolfmetal text
 • ${prefix}nature3d text
 • ${prefix}underwater text
 • ${prefix}goldenrose text
 • ${prefix}summernature text
 • ${prefix}letterleaves text
 • ${prefix}glowingneon text
 • ${prefix}fallleaves text
 • ${prefix}flamming text
 • ${prefix}harrypotter text
 • ${prefix}carvedwood text
 • ${prefix}tiktok text1 text2
 • ${prefix}arcade8bit text1 text2
 • ${prefix}battlefield4 text1 text2
 • ${prefix}pubg text1 text2
`
}
exports.menugame = (prefix) => {
    return `
  * ｢ Game ｣ *  	
 • ${prefix}tebak
`
}
exports.menudownload = (prefix) => {
    return `
  * ｢ Downloader ｣ *  	
 • ${prefix}youtube
 • ${prefix}play
`
}
exports.menuconvert = (prefix) => {
    return `
  * ｢ Convert Menu ｣ *  	
 • ${prefix}sticker
 • ${prefix}smeme
 • ${prefix}emojimix
 • ${prefix}emojimix2 <alert spam>
 • ${prefix}styletext
 • ${prefix}removebg
`
}
exports.donasi = (pushname, ownernomor) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 08565337357 (Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/628565337357 (Owner)
`
}
