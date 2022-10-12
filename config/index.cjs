/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbb709cdd01b0b329',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3cebaef879debc9fb7f49a7ff4d49f33',

  PROVINCE: '江苏',
  CITY: '无锡',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyJB76AZa5KrbnNlUmAksC8zAGPs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'yCP4OqBwTjYq6Nuc7zTQfvLUEwdaEfZtUa-ULkZJLXc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '6-21',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://lml520.mysxl.cn/',
      
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '2003', date: '06-21',
        },
        {
          type: '节日', name: '纪念日', year: '2021', date: '11-29',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-11-29' },
        // 认识
        { keyword: 'marry_day', date: '2021-08-17' },
      ],
    },
  ],

  
  
    SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '你知道墙壁，眼睛，膝盖的英文怎么说么？怎么说？wall,eye,knee，我爱你！',
        '我跨过山，涉过水，见过万物复苏，周而复始，如今山是你，水也是你。',
        '你是我明目张胆的偏袒，也是我众所周知的私心。',
        '人生会有很多不如意，有时候你会变得不知道怎么去爱自己，没关系，有我爱你。',
        '我想我的脊柱是有些弯曲的，以至于在初见你的那一刻，心就倾向了你。',
        '少说一句，怕成遗憾；多说一句，怕是惊扰。我喜欢你，四个字，刚好。',
        '喜欢你的小任性，喜欢你的小脾气，还喜欢你的小善良，怎么看都是那么美。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我。',
        '一生所求，爱与自由，你与温柔。',
        '林深时见鹿，海蓝时见鲸，梦醒时见你。',
        '晓看天色暮看云，行也思君，坐也思君。',
        '老来多健忘，唯不忘相思。',
        '遇见你，就好像捡到了100斤的运气。'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
  
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'yCP4OqBwTjYq6Nuc7zTQfvLUEwdaEfZtUa-ULkZJLXc',

  CALLBACK_USERS: [
    {
      name:'自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id:'oyJB76DOD643oXtpvjwjdcIP1Abc',
    }
  ],
  

}

module.exports = USER_CONFIG
