// all chats ke broadcast

let handler  = async (m, { conn, text }) => {

  let chats = Object.keys(await conn.chats)

  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)

  for (let id of chats) {

       let bcbg = 'https://telegra.ph/file/dfe1dea70e926304614cb.png'

       await conn.delay(1500)

       await conn.send2ButtonImg(id, bcbg, text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', 'Donasi', '.donasi', ftroli)

     }

  m.reply('*Broadcast selesai*')

}

handler.help = ['broadcast2','bc2'].map(v => v + ' <teks>')

handler.tags = ['owner']

handler.command = /^(broadcast|bc)$/i

handler.owner = true

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

export default handler
