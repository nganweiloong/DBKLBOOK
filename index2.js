const axios = require("axios");
const randomUseragent = require('random-useragent');
const dayjs = require('dayjs')
// gets a random user agent string

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const url = 'https://appsys.dbkl.gov.my/mytempahan_baru/gateway.asp?callback=jQuery19109241045487204682_1702482041694&actiontype=getuserbooking&dateplaybook=01%2F04%2F2024&hourbook=01%2F04%2F2024&locidbook=16&timeidbook=614&courtidbook=157&_=1702482041695'
const Cookie = 'ASPSESSIONIDAUSBBDAR=PMPLHDMAIHOOAAMIBKIHJOBD; TS01ae2139=01284576bb8f991da7873b9d36bf1cafa0963799a4ec6f7f6ccac92567c6417e3af943cad506b65af600d29dae75e33674090c58fb8daf30d868ac5a9217772de9323f7f2b'

let config = {
    method: "get",
    maxBodyLength: Infinity,
    url,
    headers: {
        Accept:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        Connection: "keep-alive",
        Cookie,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
            randomUseragent.getRandom(),
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua":
            '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
    },
};

setInterval(() => {
    const currentTime = dayjs()
    // const targetTime = dayjs().set('hour', 23).set('minute', 58).set('second', 30)
    const targetTime = dayjs().set('hour', 23).set('minute', 58).set('second', 30)
    const timeDifference = targetTime.diff(currentTime) / 1000

    console.log(targetTime.format('YYYY-MM-DD HH:mm:ss'));
    console.log(timeDifference);

    if (timeDifference < 0) {
        axios
            .request(config)
            .then(response => {
                console.log(JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    } else {
        console.log('WAITING..');
    }
}, 50)