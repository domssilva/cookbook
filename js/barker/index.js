fs = require('fs');

const BBHuntDir = '/home/nick/Documents/BBhunt'
const portNumber = process.argv.slice(2)[0];

if (portNumber) {
    const burpScopeJSON = generateBurpJSON(portNumber)
    fs.writeFile(`${BBHuntDir}/barker-scope.json`, burpScopeJSON, (err,data) => {
        if (err) {
          return console.error(err);
        } else {
            return 'written'
        }
      });
}

function generateBurpJSON (portNumber) {
    return JSON.stringify({
        "target":{
            "scope":{
                "advanced_mode":true,
                "exclude":[],
                "include":[
                    {
                        "enabled":true,
                        "host":"barker-social.com",
                        "port":portNumber,
                        "protocol":"any"
                    },
                    {
                        "enabled":true,
                        "host":"kreative.barker-social.com",
                        "port":portNumber,
                        "protocol":"any"
                    }
                ]
            }
        }
    })
}
