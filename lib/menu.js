const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

}

exports.textMenu = (pushname) => {
    return `
Olá, ${pushname}! 👋️
Aqui estão os rescursos deste bot!💫

🅲🆁🅸🅰🅳🅾🆁:
➯ *${prefix}sticker* 𝔠𝔯𝔦𝔞𝔯 𝔣𝔦𝔤𝔲𝔯𝔦𝔫𝔥𝔞𝔰
➯ *${prefix}stickergif* 𝔠𝔯𝔦𝔞𝔯 𝔣𝔦𝔤𝔲𝔯𝔦𝔫𝔥𝔞𝔰 𝔞𝔫𝔦𝔪𝔞𝔡𝔞𝔰
➯ *${prefix}stickergiphy* 𝔠𝔯𝔦𝔞𝔯 𝔣𝔦𝔤𝔲𝔯𝔦𝔫𝔥𝔞𝔰 𝔳𝔦𝔞 𝔩𝔦𝔫𝔨𝔰 𝔡𝔬 giphy.com
➯ *${prefix}meme* 𝔣𝔞𝔷𝔢𝔯 𝔬 𝔟𝔬𝔱 𝔡𝔦𝔤𝔦𝔱𝔞𝔯 𝔲𝔪 𝔱𝔢𝔵𝔱𝔬 𝔰𝔬𝔟𝔯𝔢 𝔞 𝔦𝔪𝔞𝔤𝔢𝔪 𝔮𝔲𝔢 𝔳𝔬𝔠𝔢 𝔪𝔞𝔫𝔡𝔞𝔯
➯ *${prefix}nulis* 𝔣𝔞𝔠𝔞 𝔬 𝔟𝔬𝔱 𝔢𝔰𝔠𝔯𝔢𝔳𝔢𝔯 𝔬 𝔮𝔲𝔢 𝔳𝔬𝔠𝔢 𝔮𝔲𝔦𝔰𝔢𝔯 𝔰𝔬𝔟𝔯𝔢 𝔲𝔪 𝔭𝔞𝔭𝔢𝔩

18+:
➯ *${prefix}nekopoi* 𝔬 𝔟𝔬𝔱 𝔳𝔞𝔦 𝔢𝔫𝔳𝔦𝔞𝔯 𝔞𝔩𝔤𝔲𝔫𝔰 𝔩𝔦𝔫𝔨𝔰 𝔡𝔢 𝔡𝔢𝔰𝔢𝔫𝔥𝔬𝔰 𝔟𝔢𝔪 𝔟𝔞𝔠𝔞𝔫𝔦𝔫𝔥𝔞𝔰 :D

🅳🅾🆆🅽🅻🅾🅰🅳🆂:
➯ *${prefix}ytmp3* 𝔠𝔬𝔫𝔳𝔢𝔯𝔱𝔞 𝔲𝔪 𝔳𝔦𝔡𝔢𝔬 𝔢𝔪 𝔪𝔲𝔰𝔦𝔠𝔞
➯ *${prefix}ytmp4* 𝔠𝔬𝔫𝔳𝔢𝔯𝔱𝔞 𝔲𝔪 𝔳𝔦𝔡𝔢𝔬 𝔢𝔪 𝔪𝔭4
➯ *${prefix}facebook* 𝔟𝔞𝔦𝔵𝔞𝔯 𝔭𝔬𝔰𝔱𝔞𝔤𝔢𝔪 𝔡𝔬 𝔣𝔞𝔠𝔢𝔟𝔬𝔬𝔨

🅱🆄🆂🅲🅰🆁 🅰🅻🅶🅾:
➯ ${prefix}images 𝔭𝔢𝔤𝔞 𝔞 𝔦𝔪𝔞𝔤𝔢𝔪 𝔡𝔬 𝔤𝔬𝔬𝔩𝔤𝔢
➯ *${prefix}sreddit* 𝔟𝔲𝔰𝔠𝔞 𝔦𝔪𝔞𝔤𝔢𝔫𝔰 𝔡𝔬 𝔰𝔲𝔟𝔯𝔢𝔡𝔡𝔦𝔱
➯ *${prefix}stalkig* 𝔰𝔱𝔞𝔨𝔢𝔦𝔞 𝔞 𝔭𝔢𝔰𝔰𝔬𝔞 𝔫𝔬 𝔦𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪
➯ *${prefix}wiki* 𝔟𝔲𝔰𝔠𝔞 𝔞 𝔭𝔞𝔩𝔞𝔳𝔯𝔞 𝔫𝔬 𝔴𝔦𝔨𝔦𝔭𝔢𝔡𝔦𝔞
➯ *${prefix}ss* 𝔱𝔦𝔯𝔞 𝔭𝔯𝔦𝔫𝔱 𝔡𝔬 𝔰𝔦𝔱𝔢 𝔰𝔬𝔩𝔦𝔠𝔦𝔱𝔞𝔡𝔬
➯ *${prefix}play* 𝔱𝔬𝔠𝔞 𝔲𝔪𝔞 𝔪𝔲𝔰𝔦𝔠𝔞
➯ *${prefix}movie* 𝔟𝔲𝔰𝔠𝔞 𝔲𝔪 𝔣𝔦𝔩𝔪𝔢 𝔭𝔞𝔯𝔞 𝔳𝔬𝔠𝔢
➯ *${prefix}whatanime* 𝔟𝔲𝔰𝔠𝔞 𝔦𝔫𝔣𝔬𝔯𝔪𝔞𝔠𝔬𝔢𝔰 𝔡𝔢 𝔲𝔪 𝔞𝔫𝔦𝔪𝔢 𝔭𝔢𝔩𝔞 𝔣𝔬𝔱𝔬 𝔢𝔫𝔳𝔦𝔞𝔡𝔞

🅸🅼🅰🅶🅴🅽🆂 🅰🅻🅴🅰🆃🅾🆁🅸🅰🆂:
➯ *${prefix}anime* 𝔦𝔪𝔞𝔤𝔢𝔪 𝔞𝔩𝔢𝔞𝔱𝔬𝔯𝔦𝔞 𝔡𝔢 𝔞𝔩𝔤𝔲𝔪 𝔞𝔫𝔦𝔪𝔢
➯ *${prefix}memes* 𝔪𝔢𝔪𝔢𝔰 𝔤𝔯𝔦𝔫𝔤𝔬𝔰 𝔞𝔩𝔢𝔞𝔱𝔬𝔯𝔦𝔬𝔰

🅾🆄🆃🆁🅾🆂:
➯ *${prefix}tts*
➯ *${prefix}translate*

🅸🅽🅵🅾🆁🅼🅰🅲🅾🅴🆂 🆂🅾🅱🆁🅴 🅾 🅱🅾🆃:
➯ *${prefix}botstat* 𝕤𝕥𝕒𝕥𝕦𝕤 𝕕𝕠 𝕓𝕠𝕥
➯ *${prefix}ownerbot* 𝕧𝕖𝕛𝕒 𝕢𝕦𝕖 𝕖 𝕠 𝕕𝕠𝕟𝕠 𝕕𝕠 𝕓𝕠𝕥

_-_-_-_-_-_-_-_-_-_-_-_-_-_

🅲🅾🅼🅰🅽🅳🅾🆂 🅿🅰🆁🅰 🅾 🅳🅾🅽🅾 🅳🅾 🅱🅾🆃:
➯ *${prefix}ban* - 𝔭𝔯𝔬𝔟𝔦𝔯 𝔲𝔰𝔲𝔞𝔯𝔦𝔬 𝔡𝔢 𝔲𝔰𝔞𝔯 𝔬𝔰 𝔠𝔬𝔪𝔞𝔫𝔡𝔬𝔰
➯ *${prefix}bc* - 𝔟𝔯𝔬𝔞𝔡𝔠𝔞𝔰𝔱
➯ *${prefix}leaveall* - 𝔰𝔞𝔦𝔯 𝔡𝔢 𝔱𝔬𝔡𝔬𝔰 𝔬𝔰 𝔤𝔯𝔲𝔭𝔬𝔰
➯ *${prefix}clearall* - 𝔩𝔦𝔪𝔭𝔞𝔯 𝔬 𝔠𝔥𝔞𝔱

Tenha um péssimo dia!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *🅰🅳🅼🅸🅽* ] ⚠ 
𝔸𝕢𝕦𝕚 𝕖𝕤𝕥𝕒𝕠 𝕠𝕤 𝕣𝕖𝕔𝕦𝕣𝕤𝕠𝕤 𝕒𝕕𝕞𝕚𝕟𝕚𝕤𝕥𝕣𝕒𝕥𝕚𝕧𝕠𝕤 𝕕𝕖 𝕘𝕣𝕦𝕡𝕠 𝕟𝕖𝕤𝕥𝕖 𝕓𝕠𝕥!
➯ *${prefix}add* 𝔞𝔡𝔦𝔠𝔦𝔬𝔫𝔞 𝔲𝔪𝔞 𝔭𝔢𝔰𝔰𝔬𝔞
➯ *${prefix}kick* 𝔟𝔞𝔫𝔦𝔯 𝔲𝔰𝔲𝔞𝔯𝔦𝔬
➯ *${prefix}promote* @tag 𝔭𝔯𝔬𝔪𝔬𝔳𝔢𝔯 𝔞 𝔠𝔞𝔯𝔤𝔬 𝔡𝔢 𝔞𝔡𝔪𝔦𝔫
➯ *${prefix}demote* @tag 𝔯𝔢𝔪𝔬𝔳𝔢𝔯 𝔠𝔞𝔯𝔤𝔬 𝔡𝔢 𝔞𝔡𝔪𝔦𝔫
➯ *${prefix}mutegrup* 𝔰𝔦𝔩𝔢𝔫𝔠𝔦𝔞𝔯 𝔬𝔰 𝔪𝔢𝔪𝔟𝔯𝔬𝔰 𝔠𝔬𝔪𝔲𝔫𝔰
➯ *${prefix}tagall* 𝔪𝔞𝔯𝔠𝔞𝔯 𝔱𝔬𝔡𝔬 𝔪𝔲𝔫𝔡𝔬
➯ *${prefix}setprofile* 
➯ *${prefix}del* 𝔡𝔢𝔩𝔢𝔱𝔞𝔯 𝔪𝔢𝔫𝔰𝔞𝔤𝔢𝔪 𝔡𝔬 𝔟𝔬𝔱
➯ *${prefix}welcome* 𝔡𝔢𝔩𝔦𝔤𝔞𝔯 𝔞 𝔪𝔢𝔫𝔰𝔤𝔢𝔪 𝔡𝔢 𝔟𝔬𝔞𝔰 𝔳𝔦𝔫𝔡𝔞𝔰

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *🅳🅾🅽🅾 🅳🅾 🅱🅾🆃* ] ⚠
Aqui estão os recursos para o dono deste bot!
➯ *${prefix}kickall*
*𝔞𝔯𝔮𝔲𝔦𝔳𝔞𝔯 𝔬 𝔤𝔯𝔲𝔭𝔬.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://trakteer.id/arugabot

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -ArugaZ`
}
