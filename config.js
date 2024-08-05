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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_06_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxLFxuICAgICAgICAyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6SnJYMnF6bi84ekg2dHNZa3YzK0QrdXA1TmxDZDQxb1B6WFVTR0RBNmZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxODU1ODQ5MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYyQTlGOTFDOUUxNzcxNjc1MkY4MERGMzgzNDMyMTIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc5MTE2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxODU1ODQ5MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZERkIyMTA1MjlGMUZEQzI0OUM4MjY2M0VGMTkxOTg1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc5MTE2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxODU1ODQ5MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY1NTFBRjY1OEFDNDcwOTNFQjI3RDU2Q0NCM0JFRTVFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc5MTE2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxODU1ODQ5MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM1QjZDNkQ2MUNBQjEwQTRFQUNGNkM4QkU3OUQ0NTQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc5MTE2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1SV9FaFJvbFRuYTBBemRNMFJqdm1RXCIsXG4gIFwicGhvbmVJZFwiOiBcImFkMjZlZDgzLTM2MTgtNDUxNS1hYzdkLTUxMGQ4MDMwY2E2ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICA5MyxcbiAgICAgIDE5OSxcbiAgICAgIDIwNixcbiAgICAgIDgxLFxuICAgICAgMTEyLFxuICAgICAgMTYsXG4gICAgICAyNixcbiAgICAgIDc2LFxuICAgICAgMjQ2LFxuICAgICAgMTQ1LFxuICAgICAgMTIzLFxuICAgICAgMTcyLFxuICAgICAgMTIsXG4gICAgICAxOTgsXG4gICAgICAyMzYsXG4gICAgICAyMzYsXG4gICAgICA3NCxcbiAgICAgIDE2MixcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyNTIsXG4gICAgICA3OSxcbiAgICAgIDIwNyxcbiAgICAgIDE4NyxcbiAgICAgIDcsXG4gICAgICAyNTAsXG4gICAgICA2LFxuICAgICAgMTgzLFxuICAgICAgMTMsXG4gICAgICA1NSxcbiAgICAgIDIyMCxcbiAgICAgIDQsXG4gICAgICA4NyxcbiAgICAgIDI1NCxcbiAgICAgIDExOCxcbiAgICAgIDg0LFxuICAgICAgMTg4LFxuICAgICAgMjMyLFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNUSFZaWUg4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTg1NTg0OTIxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM4MDM2NzAwMTQ3NzczOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQmFuZ1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0puNnB2Y0VFUHZwdnJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiKzVJSWdyS3lRMHRDcS9SRHBjdTByVUJyWk1vcSs0THc1WDZ6eTRRaFFqYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHc0RGZmVETkFURTVXZ21STWFlZHd6Y3RVNjZpM3JOZlQyTWQzM1FvV2JpMjAvc01oN2xOcFpDQkRxOHhOTzM4THBqU1JGL205VDltblpld0sxNnhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkRVRyTDNwL2hoZEp6ZjJia3llUDZRczVSUWFEdWQ2WjRQMGNmWFRuOEZNNkloR3MvL0hpQ1RTNDhlMU1LNTJUdENBdHRyeVY5SGlUQjl1Znp5VWdCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTg1NTg0OTIxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzkxMTY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQW9OXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBb04uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOYTh2ZE9aVzBHSndaT29nVzBzS3ZGNG0vL3gzZjRBc3ZOVnZnNXhPQng0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjM5NDExNDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjc5MTE2NzMxN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
