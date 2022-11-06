import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://Instagram.com/mhdkrnwnn_*

Pengen Scriptnya ?
Ada bre, santai...
https://github.com/WH-MODS-BOT/fix-bot-v3
Script di atas berbeda sama saya punya 

Pengen ubah owner V2?
Jika mau ubah owner V2 menjadi nomor owner kamu
bisa chat owner di ⬇️

wa.me/62895327999292`
let wibu = `https://telegra.ph/file/efbf6b53a658d683aaa71.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Ma aci ^_^','Y', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/mhdkrnwnn_",
    mediaType: "VIDEO",
    title: 'WannTrue-MultiDevice',
    body: 'INSTAGRAM OFFICIAL',
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
