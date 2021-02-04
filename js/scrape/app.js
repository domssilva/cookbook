const obj = require('./data.json')
const data = obj.body.outline

data.map((innerObj) => {
  innerObj.outline.map((innerInnerObj) => {
    const link = innerInnerObj['-htmlUrl']
    if (link) {
      console.log(link)
    }
  })
})