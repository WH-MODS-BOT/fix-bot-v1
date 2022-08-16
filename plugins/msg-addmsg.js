import { WAMessageProto } from '@adiwajshing/baileys'
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Reply Pesan!'
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat list nya`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar di list pesan`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    conn.reply(m.chat,`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${usedPrefix}get${which} ${text}`, m)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database', 'owner']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.refister = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler
