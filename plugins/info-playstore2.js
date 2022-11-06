let handler = async (m, { conn }) => {
	//-----PRICE
//soya
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
╭━━━━「 *NOTE📮* 」
┊ *UNCHEK INI KHUSUS USER PREMIUM!* 👑
┊ *HARAP HUBUNGI OWNER* 📞
┊ *UNTUK MEMBELI PREMIUM!* 🤝
╰═┅═━––––––๑

*⫹⫺ PAYMENT:* 💰
• DANA 💳
• OVO 💳
• GOPAY 💳
• PULSA 📱

_*SILAKAN KLIK DIBAWAH BRE (⁠つ⁠≧⁠▽⁠≦⁠)⁠つ*_
`
const sections = [
   {
	title: `${htjava} MENU ✦-------`,
	rows: [
	    {title: "🌟 PREMIUM", rowId: '.premium *Paket:* PREMIUM', description: "Menampilkan List Harga Premium"},
	    {title: "👑 OWNER", rowId: '.owner *Paket:* OWNER', description: "Menampilkan List Owner Bot"},
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  buttonText: "Click Bre!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['soya', 'susus']
handler.tags = ['main']
handler.command = /^(soya(soyay)?|susus)$/i

export default handler
