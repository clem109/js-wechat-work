# JS WeChat Work

This package makes it a little easier to send notifications on WeChat work 企业微信。

It's quick and dirty but it works.

```javascript
var WeChatWork = require('js-wechat-work')

wechat = new WeChatWork('corpid', 'corpsecret')

// Gets the access token to be used in subsequent requests, this expires
// after a certain amount of time.
// This returns a promise and then the token to be used when sending notifications
wechat.getAccessToken()

// Define the content you want to send as per the API docs, this example is for a text card
content = {
  touser: '@all',
  toparty: '@all',
  totag: '@all',
  msgtype: 'textcard',
  agentid: 1000015,
  safe: 0,
  textcard: {
    title: 'hello',
    description: 'hi',
    url: 'bbc.com',
    btntext: 'click',
  },
}

// Send the notification, content is in the format of the API request in the docs.
wechat.sendNotification(content, token)
```
