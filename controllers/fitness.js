const FitnessData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5K_7qTgWPJI9iIFGl-35jcFZ3Y1SkmXa1sA&usqp=CAU",
            title:"Running for weight loss",
            details:"Running is a great way to exercise and lose weight. It not just burns high number of calories (running at a normal pace for 30 minutes, on an average burns 259 calories.), but it also tones up your body. ",
            date:"Nov 12, 2022",
            type:"Fitness"
        },
        {
          id:2,
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QfD-m9Gw5Fy7poYzRuNt7X-xv5lnVby-BO4xcZ8l2BnPFqjcIKIpC1Hu6muaC3ZasQA&usqp=CAU",
          title:"Simple ways to relax your body in office",
          details: " Setting small goals can help you achieve a healthy lifestyle. Here are simple ways to relax your body , increase physical movement while avoiding sitting down for long times",
          date:"Nov 12, 2022",
          type:"Fitness",
          num:1
      },
        {
          id:3,
          img:"https://static.tnn.in/photo/msid-96126158/96126158.jpg",
          title:"Ram Charan sets major fitness goals",
          details: "We love how the 'RRR' star has managed to enjoy his vacation while also ensuring he finds the means to stay physically active",
          date:"Nov 12, 2022",
          type:"Fitness"
        },
        {
          id:4,
          img:"https://images.indianexpress.com/2022/11/GettyImages-winter-workout-1200.jpg",
          title:"10 winter workouts that you must do",
          details: "Exercising in winters is particularly difficult, but you need to continue to stay active; here's how you can do that",
          date:"Nov 12, 2022",
          type:"Fitness"
          
        }
    ])
}
const FitnessFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://static.toiimg.com/thumb/msid-70586756,width-800,height-600,resizemode-75,imgsize-722524,pt-32,y_pad-40/70586756.jpg",
            title:"Martial arts can develop strength",
            date:"Nov 13, 2022",
            type:"Fitness",
            num:"1"
        }
    ])
}
const FitnessTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_rbjZUE0BvBTGtrkbb6COwEVJLN7qc3-_g&usqp=CAU",
            title:"Swim fitness and for fun",
            date:"Nov 13, 2022",
            type:"Fitness",
            num:"2"
          },
          {
            id:2,
            img:"https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2021/03/Dance-Workout-Benefits.960-715x358.jpg",
            title:"Dancing is like dreaming",
            date:"Nov 13, 2022",
            type:"Fitness",
            num:"3"
          },
          {
            id:3,
            img:"https://www.mensjournal.com/wp-content/uploads/2018/01/renegaderow.jpg?quality=86&strip=all",
            title:"Too exercise short lifespan",
            date:"Nov 12, 2022",
            type:"Fitness",
            num:"4"
          },
          {
            id:4,
            img:"https://static.toiimg.com/thumb/75126749.cms?width=400&height=300&resizemode=4&imgsize=681673",
            title:"Cycling for weight loss",
            date:"Nov 12, 2022",
            type:"Fitness",
            num:"5"
          }
    ])
}
module.exports.getFitnessData = FitnessData;
module.exports.getFitnessFirstData = FitnessFirstData;
module.exports.getFitnessTopData = FitnessTopData; 