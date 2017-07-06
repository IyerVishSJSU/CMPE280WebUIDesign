/**
 * Created by Vish on 5/13/2017.
 */
var express = require('express');
var router = express.Router();
var imgHandle = require('../schema/imgModel');
var fs= require('fs');
var redis = require('redis');
var redisclient = redis.createClient();

redisclient.on('connect', function() {
    console.log('Connected to Redis DB');
});
//var redisclient=require('../app').myclient;

router.get('/insertImages',function (req,res,next) {
   console.log("/insertImages");
   //var a = new imgHandle;
   var data=[];
   var conType='image/png';
   var img1_data=fs.readFileSync('public/images/image_cmpe_building.png');
   data.push({img:{"data":img1_data,"contentType":conType},"img_id":1});

    var img2_data=fs.readFileSync('public/images/image_library.png');
    data.push({img:{"data":img2_data,"contentType":conType},"img_id":2});

    var img3_data=fs.readFileSync('public/images/image_sjsu.png');
    data.push({img:{"data":img3_data,"contentType":conType},"img_id":3});

    imgHandle.insertMany(data,function (err,docs) {
        if (err) {
            console.log(err);
            res.send("error");
        } else {
            res.send("success");
        }
    });
});

router.get('/getImage/:id',function (req,res,next) {
    console.log("/getImage");
    var image_id = req.params.id;

    redisclient.exists(image_id,function (err,reply) {
       if (reply === 1) {
            redisclient.get(image_id, function (err, resp) {
                res.json({"source": "Redis","img_data":resp});
            });
        }
        else{
           imgHandle.findOne({ img_id:image_id}, function (err, document){
               if(err){
                   console.log(err);
                   throw err;
               }
               var base64 = (document.img.data.toString('base64'));
               //console.log(typeof (image_id)+" "+typeof (base64));
               redisclient.set(image_id,base64);
               res.json({"source": "Mongo","img_data":base64});
           });
       }
    });
});

/*router.get('/getRedisStatus/:id',function (req,res,next) {
    console.log("/getRedisStatus");
    var img_id = req.params.id;
    redisclient.exists(img_id,function (err,reply) {
        if(err){
            console.log(err);
            res.send(err);
        }
        else if(reply===1){
            redisclient.get(img_id,function (err,resp) {
                res.send(resp);
            });
        }
    });
});*/

module.exports = router;

