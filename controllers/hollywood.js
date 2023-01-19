const HollywoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2023/01/18/326465-horizons-82.jpg?imwidth=1080",
            title:"Billie Eilish: Live at The O2 to release on January 27, an exclusive one day event",
            details: "The future of Henry Cavill as Superman is uncertain, no deal signed for Man Of Steel 2 yet.and earlier reports suggesting that a Man of Steel 2 is in development, nothing is set in stone yet.",
            date:"Nov 12, 2022",
            type:"Hollywood"
          },
          {
            id:2,
            img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/bts-jungkook-releases-song-dreamers-ahead-of-his-performance-at-fifa-world-cup-2022-001.jpg",
            title:"BTS Jungkook ‘Dreamers’ declared as a ‘Banger’",
            details: "It was earlier revealed that BTS member Jungkook will be performing his song Dreamers at the FIFA World Cup Qatar 2022, ",
            date:"Nov 12, 2022",
            type:"Hollywood"
            
          },
          {
              id:3,
              img:"https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
              title:"Chris Hemsworth feels it is game over for thor",
              details:"Chris Hemsworth’s time as Thor in the MCU could be coming to an end, as the actor thinks his next appearance should be his last. The actor, who plays the role of one of the original",
              date:"Nov 12, 2022",
              type:"Hollywood"
          },
          {
              id:4,
              img:"https://static.toiimg.com/thumb/msid-95638733,width-800,height-600,resizemode-75,imgsize-43832,pt-32,y_pad-40/95638733.jpg",
              title:"Mindy Kaling admits to being 'prude'",
              details: "She said: 'I think I had to get cool with being cool with sex. I feel like I am sex negative. I'm like very much of a prude.'",
              date:"Nov 12, 2022",
              type:"Hollywood"
          }
    ])
}
const HollywoodFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/11/GettyImages-1443142868-copy.jpg?w=1296&h=730&crop=1&resize=681%2C383",
            title:"Photo of Taylor Swift at American Awards",
            date:"Nov 13, 2022",
            type:"Hollywood",
            num:"1"
          }
    ])
}
const HollywoodTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/11/GettyImages-1173752202.jpg?w=390&h=220&crop=1",
            title:"David ‘Avalon’ Scrapped",
            date:"Nov 13, 2022",
            type:"Hollywood",
            num:"2"
          },
          {
            id:2,
            img:"https://www.pinkvilla.com/english/images/2022/11/1669832983_pete-davidson-emily-ratajkowski_1280*720.jpg",
            title:"Pete dating Emily rumour",
            date:"Nov 13, 2022",
            type:"Hollywood",
            num:"3"
          },
          {
            id:3,
            img:"https://www.pinkvilla.com/english/images/2022/11/1677487155_ric-flair_1280*720.jpg",
            title:"Ric F discuss CM Punk",
            date:"Nov 12, 2022",
            type:"Hollywood",
            num:"4"
          },
          {
            id:4,
            img:"https://www.pinkvilla.com/english/images/2022/11/917857840_wonder-review_1280*720.jpg",
            title:"Floren arrest performance",
            date:"Nov 12, 2022",
            type:"Hollywood",
            num:"5"
          }
    ])
}
module.exports.getHollywoodData = HollywoodData;
module.exports.getHollywoodFirstData = HollywoodFirstData;
module.exports.getHollywoodTopData = HollywoodTopData;