// if values are only "", "no_response", null -> false
// else -> true
const hasExtraInfo = (tenant) => {
  let info = false
  for (let key in tenant) {
    let val = tenant[key]
    if (val !== "" && val !== "no_response" && val !== null) {
      info = true 
    }
  }
  return info
}

module.exports = hasExtraInfo
