const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348185584921";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_05_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICAyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR3g0dm9rTWdPYVRBVUxDYVh6VUpEYTg3algxa2Rxd2ZaalJFME45OTJpQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTg1NTg0OTIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RUI4MTk1NDkyNUYyMzkyNjJGMEI4MjY2QkFCRDg5OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMyMDE1MjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTg1NTg0OTIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQkFEREExRTEzNzc3QzZERDU3QjE0RjJBRjBFQjU1Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMyMDE1MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmhWeHZXQWNUb1dPWGplZ3d2WVdYd1wiLFxuICBcInBob25lSWRcIjogXCJkMjQ2NDViMi0wMmQ5LTQ0MmMtYmQ2Mi01NzY0NThmM2U2MGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTA0LFxuICAgICAgMjQwLFxuICAgICAgMTQ0LFxuICAgICAgNCxcbiAgICAgIDMwLFxuICAgICAgMCxcbiAgICAgIDEyMCxcbiAgICAgIDE0NixcbiAgICAgIDEzNSxcbiAgICAgIDk0LFxuICAgICAgMTc3LFxuICAgICAgMTM2LFxuICAgICAgNSxcbiAgICAgIDE5LFxuICAgICAgNTQsXG4gICAgICAxOTcsXG4gICAgICAyNTAsXG4gICAgICAxNjIsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDE1MixcbiAgICAgIDE3MixcbiAgICAgIDI0MSxcbiAgICAgIDIzNSxcbiAgICAgIDEzNixcbiAgICAgIDIxOSxcbiAgICAgIDIzNyxcbiAgICAgIDk4LFxuICAgICAgODAsXG4gICAgICAxNTgsXG4gICAgICAxNjYsXG4gICAgICAxMDAsXG4gICAgICAxMDYsXG4gICAgICAxMjgsXG4gICAgICAyMDcsXG4gICAgICA2NSxcbiAgICAgIDE2MyxcbiAgICAgIDEyNSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMRkFOTlI5MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4NTU4NDkyMTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzODAzNjcwMDE0Nzc3Mzo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJhbmdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYVJuNXNIRU92djE3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkEzdUl4a09sTmFDajJaMW1DUy8wTWxnZFdUWGMrOURQWk9QR3lRdXZUR2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR3VPUFVCbmQ2bWlWNDlYY3Z0Y29YOU8wSW92S3B6dEdhL2hYVm5PNXVUWWpvNm82WlZGREVzcnBteHF2SEFaSFdGckdNOTM5NFhhSDNoYkgrVUVYQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibTlQRTllTG16ZXFYTVoyUStwOWo1TERZV21iWENwcStwTWhrQnlBV1N3ZXhCWHJuQnhmSzUrRkJsUk4relJ5K25aemxENzhBTHZpWWYyZWtFbWVpZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE4NTU4NDkyMTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzIwMTUxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURoWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGhYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0NyMzFxRGYyVlQ0b2tsMFVDb0U5bll4bkhxakd0UkI4TWhneHl4UWpkRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM2MTgxNDQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMyMDE1MjEzNTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Kamil",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
