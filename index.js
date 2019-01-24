
//start the database on local host with the database tyles
// <= === === === === --- Connection --- === === === === >=
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/tyler',{ useNewUrlParser: true })
//show that we are connected
database = mongoose.connection
database.on("open", ()=> {
  console.log("Connected")
})
const Cat = require('./model')


  const garfield = new Cat({name: 'marty', age: 56, location: 74104 })
  const nermal = new Cat({name: 'Nermal', age: 11})
  const arlene = new Cat({name: 'Arlene', age : 10})


// <= === === === === --- CRUD --- === === === === >=
const getCats = () => {	
	Cat.find()
		.then(cats => {
			console.log(cats)
		})
		.catch(err => {
			console.log(error)
		})
}

const createCat = (catToSAve) => {
  catToSAve.save()
  	.then( doc => {
  		console.log(doc)
  	})
  	.catch(err => {
  		console.log(err)
  	})
}

const deleteCat = (id) =>{
	let itemsId = {_id: id}
 Cat.findOneAndDelete(itemsId)
 	.then(doc => {
 		console.log(doc)
 	})
 	.catch(err => {
 		console.log(err)
 	})
}


createCat(garfield)

// deleteCat('5c4a268c06590b76b00604a7')
// getCats()

