// ------------------------------------------------------------- scrape bochilteam error -------------------------------------------------
/*
import fetch from 'node-fetch'
import axios from 'axios'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdlv3(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdl(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*Nickname:* ${nickname}
*Description:* ${description}
_©WannTrue_
`.trim(), m)
}
catch {
    if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[0]}`, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tta ${args[0]}`, m)
    }
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i
export default handler
*/

// --------------------------------------------- pakai scrape social_media_downloader --------------------------------------------------------

/*import fetch from 'node-fetch'
import axios from 'axios'
import { tiktok } from "social_media_downloader"
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
try {
let p = await tiktok(args[0])
    if (!p.link) throw 'Can\'t download video!'
    let cap = `*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*Nickname:* ${p.dev}
*Description:* ${p.description}
*Url:* ${p.url}
_©WannTrue_
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `Donasi`, `.donasi`, `Audio`, `.tta ${args[0]}`, fakes, adReply)
} catch (e) {
    throw eror
    }
}

handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
*/

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) return m.reply('Link?')
	
let tiktok = `
${htki}  📺 Tiktok Downloader 🔎  ${htka}

⚡ Silakan pilih Tiktok Downloader di tombol di bawah...

*Teks yang anda kirim:* ${args[0]}

Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

🚀 : Kalau error berarti scrape / limit apikey free nya abis asw :v
🚀 : Makanya bantu donasi buat support + beli apikey unlimited bjir :v

Donasi :
Nomor Developer : wa.me/6282127487538
Nomor Owner Bot : wa.me/${nomorown}`

// yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} Tiktok Downloader Work✦-------`,
	rows: [
        {title: "Api Malesin", rowId: `.malesin ${args[0]}`, description: 'Apikey Limit Unlimited' },
        {title: "Api Neoxr", rowId: `.ttkneoxr ${args[0]}`, description: 'Apikey Limit Free' },
        {title: "Api Adiixyz", rowId: `.ttkadiixyz ${args[0]}`, description: 'Apikey Limit Unlimited' },
        {title: "Api Anabot", rowId: `.ttkanabot ${args[0]}`, description: 'Apikey Limit Unlimited' },
        {title: "Api X-Team", rowId: `.ttkxteam ${args[0]}`, description: 'Apikey Limit Free' },
	{title: "Api ZenzApis", rowId: `.ttkzenzapis ${args[0]}`, description: 'Apikey Limit Free' },
    ]
    },{
        title: `${htjava} Tiktok Downloader Error / 50% Work ✦-------`,
        rows: [
        {title: "BochilTeam V1 (Error)", rowId: `.ttkbocilteam1 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "BochilTeam V2 (Error)", rowId: `.ttkbocilteam2 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "BochilTeam V3 (Error)", rowId: `.ttkbocilteam3 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "TikTok Social (Error)", rowId: `.ttksocial ${args[0]}`, description: 'Scrape Social' },
        {title: "Api BetaBotz (Error)", rowId: `.ttkbetabotz ${args[0]}`, description: 'Apikey Limit Unlimited' },
	{title: "Api Xcoders (Error)", rowId: `.ttkxcoders ${args[0]}`, description: 'Apikey Limit Unlimited' },
        ]
    },
]

const listMessage = {
  text: tiktok,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fakes, mentions: await conn.parseMention(tiktok), contextInfo:{ forwardingScore: 99999, isForwarded: true }})

}

handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
