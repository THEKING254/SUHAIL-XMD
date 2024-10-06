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


global.SESSION_ID = process.env.SESSION_ID  || SUHAIL_00_32_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MyxcbiAgICAgICAgNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXRkxnMTNlc1dBTnlUeXJKMHNaby9WWkJ3c1YvRElrTmNiTFg0cHB1YW1JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwMjYxNjAwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOENGMDk4MkEyMEI5RkQ5QjkzQzVFMjJCQjY0MDc0MDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MTc0NzE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzAyNjE2MDAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMTMzRTlFODJGMDZDRjlGRkZCQUVDOEMyQzE0QUM0N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgxNzQ3MTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN25uUTNqVmpUOUtTMkczMlZkTVFYZ1wiLFxuICBcInBob25lSWRcIjogXCI1ZGM2MDZhNC02MGU5LTQ0NjctYTk4ZC0yZDg0NDEyYzgzZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgOTcsXG4gICAgICAxMDAsXG4gICAgICA2NSxcbiAgICAgIDI0OCxcbiAgICAgIDEwOSxcbiAgICAgIDE1NixcbiAgICAgIDEwOCxcbiAgICAgIDc3LFxuICAgICAgMTg5LFxuICAgICAgMTU5LFxuICAgICAgMzYsXG4gICAgICA0NCxcbiAgICAgIDQ5LFxuICAgICAgNSxcbiAgICAgIDE0NyxcbiAgICAgIDI0MyxcbiAgICAgIDEyLFxuICAgICAgMTA2LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMzgsXG4gICAgICAyMTksXG4gICAgICAxNDQsXG4gICAgICA0MSxcbiAgICAgIDgsXG4gICAgICAxMzMsXG4gICAgICA3OSxcbiAgICAgIDIyMixcbiAgICAgIDExNSxcbiAgICAgIDExMSxcbiAgICAgIDc3LFxuICAgICAgMjUxLFxuICAgICAgNzgsXG4gICAgICAxMTcsXG4gICAgICA1NCxcbiAgICAgIDIyNCxcbiAgICAgIDI0NyxcbiAgICAgIDU5LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFWTlpXNU5BXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDI2MTYwMDI6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NjEwNDAxMjQ2NDE5MzoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcjhuczBFRVBhMGg3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImYyeHZGL1VOYit2bWYyRlpNVi9NR0NGMGZIOFpqOXhHUmRFL3JQeXNMVFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaER5dTY2bFF4d3Q5M1E4OGxpaTAwRG03WnBqdlJpVExlSWlzVFQ5TnlBdHlKQVBNbUxZWWpybURreTVKcE0zcm50d0IvbHNDL3FaUTQ4Tng3SnRkQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR3ljZnMzc1ZtQ1hBOWJJUnZRbjJNVFFJQTdxa0RXOFoyalBvQ3RoSXF0S0JuRzc0VCsycHRSYnUzTUhRKzl2dFhwMGxVZDVKUnZTNEVDam1JVFE1alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzAyNjE2MDAyOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODE3NDcxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBPWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUE9YLmpzb24iOiAie1wia2V5RGF0YVwiOlwiemU0cFJ1c3lxMW1tdkdYT1lHTEdtbkJtS09lQ29Pb0d2ejdyNEQwNHB3az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM1NzMwMDEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgxNzQ3MTgyNjhcIn0iCn0="  // PUT your SESSION_ID 


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
