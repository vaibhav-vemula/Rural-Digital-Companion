const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
require("./db/conn");
const PersonData = require("./models/persons");
const VillageTimeline = require("./models/village");
const Admincred = require("./models/admin");
const cors = require('cors');
const bodyparser = require("body-parser");

const Nexmo = require('nexmo');

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

const nexmo = new Nexmo({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  });

app.post("/person",(req, res) => {
    console.log(req.body);
    const user = new PersonData(req.body);
    user.save();
    res.send("yaay");
    res.end();
})

var dat=[];
var tim=[];

app.get('/gettimeline/:village',(req,res)=>{
  console.log(req.params.village);
  VillageTimeline.find({village:req.params.village},function(err,docs){
        tim=docs;
        console.log(tim[0]);
        res.send(tim[0]);
  });
})


function converttime(req){
  var timeSplit = req.body.time.split(':'),hours,minutes,meridian;
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = 'PM';
    hours -= 12;
  } else if (hours < 12) {
    meridian = 'AM';
    if (hours === 0) {
      hours = 12;
    }
  } else {
    meridian = 'PM';
  }
  var time=`${hours}:${minutes} ${meridian}`;
  
  return time;
}


app.post("/sendmsg", (req, res, next)=>{
     console.log(req.body);
     
    PersonData.find({villagename:req.body.village},{_id:0,phone:1}, function(err,docs){
      const to=[]
       
      dat=docs;
       dat.map((dat)=>{
         dat.phone="91"+dat.phone;
          to.push(dat.phone);
       })

     var time=converttime(req);
       
     console.log(to);
      
        const from = 'GDB';
      //const to = `91${dat[0].phone}`;
      
      const text = `\n\nPURPOSE - ${req.body.purpose} \nVILLAGE - ${req.body.village} \nTIME - ${time} \n\n${req.body.message} \n\n\nGRAMIN DIGITAL BANDHU`;
      
      to.map((to)=>{
      
        nexmo.message.sendSms(from, to, text,(err, responseData) => {
          if (err) {
              console.log(err);
          } else {
              if(responseData.messages[0]['status'] === "0") {
                  console.log("Message sent successfully.");
              } else {
                  console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
              }
          }
      });
      })
      
        
        console.log('sent');
        res.send(docs);
        
    });
    next();
})

app.use('/sendmsg',function(req,res){

  var time=converttime(req);

 VillageTimeline.findOneAndUpdate({village:req.body.village},{$set:{"today.$[ele].time":time}},{arrayFilters:[{"ele.head":req.body.purpose}]},function(err,docs){
   console.log(docs);
   if(err) console.log(err);
 })
console.log("yyyyy");

})

// app.post('/timelinepost',(req,res)=>{
  

// const vil = new VillageTimeline(req.body);
// vil.save();
// res.send(req.body);

// })

// app.post('/admin',(req,res)=>{

//   const ad= new Admincred(req.body);
//   ad.save();
//   res.send(req.body);
// })

app.post('/admin',(req,res)=>{

  Admincred.find({userid:req.body.userid},(err,docs)=>{
     if(docs.length!=0)
     {
       if(docs[0].pass === req.body.pass)
          res.send('1');

        else res.send('0');

     }
     else res.send('0');
    
    console.log(docs);
     
  })

})





app.listen(port,() =>
{
    console.log("connection successful");
})
