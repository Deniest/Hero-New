 BASIC SIMULATION OF MMORPG WITH TYPESCRIPT & MONGO DB
Documentation

Application
Methods
syncAndUpdateFiles()
create()
mixList()
findAll()
findOne()
insertOne()
insertMany()
writeDataFromDifferentFile()
Methods
eat ()
This method allows the character to eat:

mondash.syncAndUpdateFiles()
create()
This method creates a new elements. Example :

mondash.create({ exampleName: 'utah' })
mixList()
This method mixing from the current array. Example :

mondash.mixList()
findAll()
Returns all the information from the database.

mondash.findAll({})
findOne()
Returns one specific data from the database.

mondash.findOne({ name: 'can' })
insertOne()
Creates single data to database.

mondash.insertOne({ name: 'lorenzo lucca' })
insertMany()
Creates plural data to database.

mondash.insertMany([{ name: 'can' }, { name: 'pele' }])
writeDataFromDifferentFile()
Different array's data transfering to our database.

const differentArray = [{ name: 'can' }, { name: 'can cevik' }]

mondash.writeDataFromDifferentFile(differentArray)
