const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254702616002";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_02_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYyLFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIndiekFNQWZ2alhud1pmeG0xUi9TU2s0MEtyWjJ0SitSYmJ6bmN4WGx1bU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9wM3hhNUhjUzd5dHc5emFOMjV1bWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDE5ZDg5YWMtN2EwMS00MzAwLWJkZGMtYWY0ZmUzZGZkM2MyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDE5MCxcbiAgICAgIDIyMyxcbiAgICAgIDE1MyxcbiAgICAgIDYxLFxuICAgICAgNjgsXG4gICAgICAxMjQsXG4gICAgICAxNzYsXG4gICAgICA3MCxcbiAgICAgIDUwLFxuICAgICAgMjI2LFxuICAgICAgMjksXG4gICAgICA4LFxuICAgICAgMjMxLFxuICAgICAgMjI0LFxuICAgICAgMTgwLFxuICAgICAgMCxcbiAgICAgIDExMSxcbiAgICAgIDI1MSxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDI0NSxcbiAgICAgIDI1MyxcbiAgICAgIDEwMyxcbiAgICAgIDIzLFxuICAgICAgMTIwLFxuICAgICAgMTAxLFxuICAgICAgNDIsXG4gICAgICAyMTgsXG4gICAgICAyMCxcbiAgICAgIDg5LFxuICAgICAgMTQ0LFxuICAgICAgMTA1LFxuICAgICAgMTEsXG4gICAgICAxMTcsXG4gICAgICAyMzYsXG4gICAgICAxMzAsXG4gICAgICAxLFxuICAgICAgMTk0LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpOTEMxOTlCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDI2MTYwMDI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NjEwNDAxMjQ2NDE5MzoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOajhuczBFRU11Vy83Y0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImYyeHZGL1VOYit2bWYyRlpNVi9NR0NGMGZIOFpqOXhHUmRFL3JQeXNMVFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzZ2NzFRbytDa0ZscjdRbVdCb25UeFp0b3pDNmpaZUZxK0I2N0Jub2J3b05XNzhZNzJNN2V1Rk1Ia2FtU1ExUjZ3OVUwYWhYekFWZkd0RGl2WEp0QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRTZ5RzNLOE9hcWJhbkFVNnBCY29uN3hGNWlSZVppT2hvRlBCWXcrRWs0Vi9DWldhU1o0TW1MenkxVEMrS1ZGdkxoT2liWWtrMXkrMERJOXp2c29vZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzAyNjE2MDAyOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODAzOTc1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx4VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHhVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMk9JdkZqV2gvQ20rTzQ2cEdwVTl0WFNzNngrTWZ6ODJkUFgyZjRLay9ocz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM1NzMwMDAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI4MDAxNzAxMDM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
