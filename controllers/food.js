const FoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://images.herzindagi.info/image/2022/Nov/winter-fruits.jpg",
            title:"Fruit can fix breathing issues to digestion",
            details: "As kids we have been told about the umpteen benefits of including fruits in our day-to-day diet. Well, here’s all you need to know about this exotic fruit.",
            date:"Nov 12, 2022",
            type:"Food"
          },
          {
            id:2,
            img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
            title:"To make restaurant style Italian food at home",
            details: "We all love and crave Italian food. But eating out daily might not be the best option and a viable one.  So why not dish out some healthy Italian fare at home?",
            date:"Nov 12, 2022",
            type:"Food"
            
          },
          {
              id:3,
              img:"https://static.toiimg.com/photo/95629614.cms",
              title:"Eating a handful of pista chios may improve heart",
              details:"One of the most loved shell nuts-- pistachios have been an inseparable part of Indian cuisine, but do you know eating these little nuts daily may improve heart health. ",
              date:"Nov 12, 2022",
              type:"Food"
          },
          {
              id:4,
              img:"https://static.toiimg.com/thumb/95562564.cms?width=680&height=512&imgsize=177996",
              title:"Adding this leaf to boiling rice can give a basmati",
              details: "Popularly known as the ‘Vanilla of the East’, Pandan leaves or ‘Annapoorna Leaves’ are one of your best bets when it comes to aromatic basmati rice.",
              date:"Nov 12, 2022",
              type:"Food",
              num:1
          }    
    ])
}
const FoodFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://static.toiimg.com/thumb/95650985.cms?width=680&height=512&imgsize=72808",
            title:"Passion fruit peels help preserve fruit",
            date:"Nov 13, 2022",
            type:"Food",
            num:"1"
        }
    ])
}
const FoodTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://static.toiimg.com/thumb/60841048.cms?width=1200&height=900",
            title:"Aluminium foil is danger",
            date:"Nov 13, 2022",
            type:"Food",
            num:"2"
          },
          {
            id:2,
            img:"https://i.ytimg.com/vi/dMrNqNcQ6qY/maxresdefault.jpg",
            title:"Chicken soup for the soul",
            date:"Nov 13, 2022",
            type:"Food",
            num:"3"
          },
          {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvC_ZapRCScPERPp0CLqV5DCxVGg0oeLcvdwze4erVEKS5ClKhgLeDZqZAT4c4iRstIbA&usqp=CAU",
            title:"Cucumber consumtion",
            date:"Nov 12, 2022",
            type:"Food",
            num:"4"
          },
          {
            id:4,
            img:"https://static.toiimg.com/photo/95432567.cms",
            title:"Raw papaya are best",
            date:"Nov 12, 2022",
            type:"Food",
            num:"5"
          }
    ])
}
module.exports.getFoodData = FoodData;
module.exports.getFoodFirstData = FoodFirstData;
module.exports.getFoodTopData = FoodTopData;