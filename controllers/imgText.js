const LgImgData = (req,res) => {
    res.send([
      {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58xCjhZiedfbBnRDfP58v-Cn4H7iuWS1C9Q&usqp=CAU",
        text:"Nature is a art of a God.. ",
        type:"Travel",
        date:"Nov 12, 2022"
      }
    ])
}
const SmImgData = (req,res) => {
    res.send([
    {
        img:"https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
        text:"Land is the best art.",
        text1:"—Andy Warhol",
        type:"Travel",
        date:"Nov 12, 2022"
    },
    {
        img:"https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
        text:"Land is the best art.",
        text1:"—Andy Warhol",
        type:"Travel",
        date:"Nov 12, 2022"
    }
    ])
}

module.exports.getLgImgData = LgImgData;
module.exports.getSmImgData = SmImgData;
