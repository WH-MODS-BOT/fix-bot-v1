import fetch from 'node-fetch'

let zzz = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/ukhty.txt')
    .then(res => res.text())
    .then(txt => zzz = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = zzz[Math.floor(Math.random() * zzz.length)]
    if (!img) throw img
    conn.sendButtonImg(m.chat, img, 'Nih', ownername, 'Next', `.ukhty`, m) 
    }
handler.help = ['cecanukhty']
handler.tags = ['internet']
handler.limit = false
handler.command = /^(cecanukhty|ukhty)$/i

export default handler

