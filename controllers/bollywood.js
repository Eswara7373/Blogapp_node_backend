const BollywoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://images.indianexpress.com/2021/11/RRR-1200.jpg",
            title:"Why Naatu Naatu, the song from RRR in the Oscar shortlist, has caught the fancy of the western world",
            details: "Naatu Naatu is a Telugu language song and is sung by Rahul Sipligunj, Kaala Bhairava and M. M. Keeravani. Naatu Naatu , from the album ... ",
            moreDetails:"Naatu Naatu is a Telugu language song and is sung by Rahul Sipligunj, Kaala Bhairava and M. M. Keeravani. Naatu Naatu , from the album ... ",
            date:"Nov 12, 2022",
            type:"Bollywood"
          },
          {
            id:2,
            img:"https://static.toiimg.com/thumb/msid-95473777,width-800,height-600,resizemode-75,imgsize-8914,pt-32,y_pad-40/95473777.jpg",
            title:"SRK receives Global Icon of Cinema award",
            details: "Bollywood megastar Shah Rukh Khan attended the Sharjah International Book Fair 2022 where he was honored with the Global Icon of Cinema and Cultural Narrative award.",
            date:"Nov 12, 2022",
            type:"Bollywood"
            
          },
          {
              id:3,
              img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_5OzWAtKrlNTq-fMMNf0PDK_iHjz6jg8Tg&usqp=CAU",
              title:"Priyanka Chopra on working in Hollywood",
              details:"Actor, producer, and entrepreneur Priyanka Chopra enjoys a massive fan following not only in Bollywood but also in Hollywood. ",
              date:"Nov 12, 2022",
              type:"Bollywood"
          },
          {
              id:4,
              img:"https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
              title:"Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
              details: "The Hindi remake of Tamil blockbuster movie Kaithi starring Ajay Devg",
              date:"Nov 12, 2022",
              type:"Bollywood",
              num:1
          }    
    ])
}
const BollywoodFirstData = (req,res) => {
    res.send([
      {
        id:1,
        img:"https://images.hindustantimes.com/img/2022/11/13/550x309/rajkummar_rao__1668337052380_1668337069198_1668337069198.webp",
        title:"Rajkumar reveal first pay was ₹300 ",
        date:"Nov 13, 2022",
        type:"Bollywood",
        num:"1"
      }
    ])
}
const BollywoodTopData = (req,res) => {
    res.send([
      {
        id:1,
        img:"https://images.firstpost.com/wp-content/uploads/2022/11/srksurgery.jpg?impolicy=website&width=320&height=180",
        title:"Pathaan: Shah Rukh Khan refuses to promote film on The Kapil Sharma Show and Bigg Boss 16?",
        date:"Nov 13, 2022",
        type:"Bollywood",
        num:"2"
      },
      {
        id:2,
        img:"https://images.hindustantimes.com/img/2023/01/19/550x309/Ranveer_Singh_1674127456489_1674127490689_1674127490689.jpg",
        title:"Ranveer Singh says he believed his brain's 'left side had a short circuit'",
        date:"Nov 13, 2022",
        type:"Bollywood",
        num:"3"
      },
      {
        id:3,
        img:"https://images.hindustantimes.com/img/2023/01/19/550x309/nora_fatehi_1653207262428_1674120514972_1674120514972.jpg",
        title:" Sukesh Chandrashekhar promised big house, luxurious lifestyle if I agreed to be his girlfriend",
        date:"Nov 12, 2022",
        type:"Bollywood",
        num:"4"
      },
      {
        id:4,
        img:"https://images.hindustantimes.com/img/2023/01/19/550x309/salaar_1674118060852_1674118077116_1674118077116.jpeg",
        title:"Fans want update on Prabhas Salaar teaser after cinematographer shares BTS glimpse from set",
        date:"Nov 12, 2022",
        type:"Bollywood",
        num:"5"
      }
    ])
}
module.exports.getBollywoodData = BollywoodData;
module.exports.getBollywoodFirstData = BollywoodFirstData;
module.exports.getBollywoodTopData = BollywoodTopData;