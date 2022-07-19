const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	xnonekey: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key', // masukin apikey disini
}

// Owner
global.owner = ['628565337357','6281572686011','6283131473734','6282128840676','6285751337466']
global.ownernomer = '628565337357'
global.premium = ['628565337357']
global.ownername = 'awy__'
global.botname = 'Miaw'
global.footer = '© Miaw Team'
global.email = 'mr.z4bux@gmail.com'
global.ig = 'https://instagram.com/alwiiyy__'
global.region = 'planet Mars'
global.lolhuman = 'Sad-Bot'

// Keperluan buttons
global.myweb = 'not found'
global.sc = 'https://github.com/z4bux'

// Wm
global.packname = 'Created'
global.author = 'By Miaw Bot'

// Thumb & Image random
global.thumb = fs.readFileSync('./media/x-none.jpg')
global.pp_video = fs.readFileSync('./media/x-none.mp4')
global.qris = fs.readFileSync('./media/x-none.jpg')

/*
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
*/

// Lainnya
global.sessionName = 'miaw'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

// Mess wait & Premium
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Miaw Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Miaw',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Miaw',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    endGLimit: 'Limit Harian Game Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitharian = "25"
global.limitgame = "25"
global.limitawal = {
    premium: "Infinity",
    free: 15
}

// Logs update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
