const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel=require('./models/users')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://watchmanjesse5002:AfctJxfimX9JK3cZ@cluster0.eb2mgmi.mongodb.net/crudone?retryWrites=true&w=majority')

app.put('/update/:id', (req, res)=>{
  const id=req.params.id
  UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name, email:req.body.email, age:req.body.age})
  .then((users)=>{
    res.json(users)
  })
  .catch((error)=>{
    res.json(error)
  })
} )

app.get('/', (req,res)=>{
  UserModel.find({})
  .then((users)=>{
    res.json(users)
  })
  .catch((error)=>{
    res.json(error)
  })
})

app.delete('/deleteuser/:id', (req, res)=>{
  const id=req.params.id
  UserModel.findByIdAndDelete({_id:id})
  .then((res)=>{
    res.json(res)
  })
  .catch((error)=>{
    res.json(error)
  })
})

app.get('/getuser/:id', (req, res)=>{
  const id=req.params.id
  UserModel.findById({_id:id})
  .then((users)=>{
    res.json(users)
  })
  .catch((error)=>{
    res.json(error)
  })
})

app.post('/create', (req,res)=>{
  UserModel.create(req.body)
    .then((users)=>{
      res.json(users)
    })
    .catch((error)=>{
      res.json(error)
    })
})


app.listen(8000, (req,res)=>{
  console.log(`Server is running on port 8000`)
})