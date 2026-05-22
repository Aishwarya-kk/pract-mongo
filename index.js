const mongoose=require("mongoose");


main().then((res)=>{
    console.log("mooongose is connected");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1/test");
}


const mySchame=new mongoose.Schema({
    name:String,
    email:String,
    phno:Number
});

const Prac=mongoose.model("Prac",mySchame);


const practs=new Prac({
    name:"Aishwraya",
    email:"kaishu23@gmail.com",
    phno:990165557
});
practs.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


const practs2=new Prac({
    name:"kiran",
    email:"kiran23@gmail.com",
    phno:990165989
});
practs2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
