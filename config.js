const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};


// Other
global.apikey = 'bf2d2cf29b3edc604b447983';
global.ownername = '༆🇦🇱⃞➵𝗔𝗠𝗘𝗘𝗡-𝗦𝗘𝗥🇦🇱⃪⃞➣࿐⁩';
global.owner = ['916238768108'];
global.premium = ['916238768108'];
global.packname = '𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢';
global.author = '★✪ E̾R̾I̾C̾-̾B̾O̾T̾ ✪★';
global.sessionName = 'session';
global.scan = "https://qr-ameen-a3b82b9f1794.herokuapp.com/";
global.prefa = ['', '!', '.'];
global.sp = '✪';
global.mess = {
    success: '_*✓ Success*_',
    admin: '_*This feature is only for group admins*_',
    botAdmin: '_*I am not an admin!*_',
    owner: '_*You are not my owner*_',
    group: '_*You can use this command only in groups ❌*_',
    private: '_*Feature is used only for private chats!*_',
    bot: '_*Bot number user special features*_',
    wait: '*Processing Your request*',
    endLimit: '_*Your daily limit has expired, the limit will be reset every 12 hours*_',
};
global.link = 'https://chat.whatsapp.com/GiKpLywBedf6V2eLr3ZAa8'
global.linkGroup = 'https://chat.whatsapp.com/GiKpLywBedf6V2eLr3ZAa8'

global.typemenu = 'v1' // 'v1' => 'v5'
global.onlygroup = false // onlygroup
global.onlypc = false
global.limitawal = {
    premium: 'Infinity',
    free: 10
};
module.exports = {
    sessionName:process.env.SESSION_ID|| ""
};
// Add anticall option
global.config = {
    options: {
        antiCall: false, // Set to true for anticall functionality, false otherwise
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}
