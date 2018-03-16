const fetch = require('node-fetch')

class WeChatWork {
  constructor(corpID, corpSecret) {
    this.corpID = corpID
    this.corpSecret = corpSecret
    this.accessUrl =
      'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=' +
      corpID +
      '&corpsecret=' +
      corpSecret
  }

  // Get access token
  getAccessToken() {
    fetch(this.accessUrl)
      .then(response => {
        response.json().then(json => {
          return json.access_token
        })
      })
      .catch(error => {
        console.log(error)
        return new Error(error)
      })
  }

  sendNotification(content, token) {
    const url =
      'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=' + token

    fetch(url, { method: 'POST', body: JSON.stringify(content) })
      .then(response => {
        response.json().then(json => {
          return json
        })
      })
      .catch(error => {
        console.log(error)
        return new Error(error)
      })
  }
}

module.exports = WeChatWork
