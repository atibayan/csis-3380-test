const mongoose = require('mongoose')
require('dotenv').config()
const uname = process.env.uname
const pwd = process.env.pwd
const url = `mongodb+srv://${uname}:${pwd}@cluster0.4uatx8k.mongodb.net/?retryWrites=true&w=majority`
console.log(url)
// const url = `mongodb://localhost:27017`
const User = require ("./User")

async function main() {
  try {
    const status = await mongoose.connect(url)
  } catch (err){
    console.log(err)
  }
  
}

main()

try {
  mongoose.connection.on('open', () => {
    console.log('connected')
  })
} catch (err) {
  console.log('Something error happened')
}

async function run(){
  const user = new User({uname: "kyle02", fname: "kyle", lname: "doe", age: 26})
  await user.save().then((x) => {console.log("user saved " + x)})
  const users = await User.find();
  console.log(users);
}

run()

// main.then(()=>{
//   run()
//   async function run(){
//     const user = new User({uname: "kyle02", fname: "kyle", lname: "doe", age: 26})
//     await user.save().then((x) => {console.log("user saved " + x)})
//     const users = await User.find();
//     console.log(users);
//   }
// })

