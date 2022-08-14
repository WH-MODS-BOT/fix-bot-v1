import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/sound46.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow",
    mediaType: 2,
    description: "https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow", 
    title: 'whmods-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['sound46']
handler.help = ['sound46']

export default handler