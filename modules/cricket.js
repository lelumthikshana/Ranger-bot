const axios = require('axios');

async function cricket(url) {
    try {
        const scoredata = (await axios.get(`https://cricket-mskian-whatsbot.vercel.app/cri.php?url=${url}`)).data
        if (scoredata.success) {
            return {
                status: true,
                msg: `ππ°π½πΆπ΄π update\n\nπ *${scoredata.livescore.title}*\n\n${scoredata.livescore.update}\n\n_____________________________\n\n_*Ε¦ΓΕ¦ΘΊΕ*_ : *${scoredata.livescore.current}*\n\n_____________________________\n\nβ― *BΓTSMΓN DΓTΓΓLS (strickers end)*\n\nΒ» *π±π°πππΌπ°π½* : ${scoredata.livescore.batsman}\n        -ππππ  : ${scoredata.livescore.batsmanrun}\n        -π΅ππππ : ${scoredata.livescore.fours}\n        -πππ‘ππ : ${scoredata.livescore.sixes}\n\nΒ» *πΏπ°πππ½π΄πππ·πΈπΏ* : ${scoredata.livescore.partnership}\n\nΒ» *ππ΄π²π΄π½π* : ${scoredata.livescore.recentballs}\n\nΒ» *π»π°ππ ππΈπ²πΊπ΄π* : ${scoredata.livescore.lastwicket}\n\nΒ» *πππ½ ππ°ππ΄* : ${scoredata.livescore.runrate}\n\n_____________________________\n\nβ― *BΓWLΓR DΓTΓΓLS*\n\nΒ» *π±πΎππ»π΄π* : ${scoredata.livescore.bowler}\n        -πΎππππ : ${scoredata.livescore.bowlerover}\n        -ππππ πππππ : ${scoredata.livescore.bowlerruns}\n        -πππππππ : ${scoredata.livescore.bowlerwickets}
                    
                    
               β’ββπβ β€πβπΌβ’ `,
            }
        } else {
            throw ''
        }
    } catch (err) {
        return {
            status: false,
            msg: "That's an error."
        }
    }
}

module.exports = cricket
