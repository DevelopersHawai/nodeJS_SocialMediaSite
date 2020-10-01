# Node JS project for a social media site version 2.0

### Please checkout the latest branch for the lastest newest features available in this project.
As this project will be updated and tested as my full-time job requires a lot of me.



First Step:
A request is sent to profile update
...........This is what the url will look like
...........http://localhost:8080/profile/userid933jdghdgxv876

when there is a userID in the incoming request(url)
.......based on that userID
.......our backend will make a query to a database and load that user information (name, email, etc.)
.......then we will add that information to the request object.









In its current configuration it is in a contributor status and only software engineers / hobbyists 
who understand the basic instructions below are able to view the project as functional


.. Latest branch was recorded [here](https://github.com/Hawaiideveloper/nodeJS_SocialMediaSite/branches)
 
 
What you  will need to get started is:
- [ ] Node.js  
- [ ] Database connection called [MongoDB](https://www.mongodb.com/cloud/atlas) 
- [ ] an "env" file that has your code based enviromental variables.  


### Please create an ".env" file in the root of the project's directory.



############################## env file #############################################

'''
MONGO_URI="mongodb+srv://[username]:[password]@[location_of_resources:[port_to_mongoDB]/server]
JWT_SECRET=SomeRandomTextHereWithSomeNumbersAndSymbols!@$#%^&*()
'''
PORT=8080



############################### end of env file #######################################






### Read how to setup a MongoDB  Atlast cluster and connecting to it using NodeJS API here below:
[Setting up](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/) a MondoDB Cluster
[Connecting to a MondoDB Cluster](https://docs.atlas.mongodb.com/driver-connection/) using NodeJS

For more information on [NodeJs Security](https://docs.mongodb.com/manual/core/security-scram/) or [Connections drivers](https://docs.mongodb.com/drivers/node) visit the corresponding links mentioned within this sentence.

#### To Start the project out of the box:
Delete the node_module directory
    - [ ] type: `npm install` inside a terminal window
    - [ ] If you have issues verify that the package.json mataches what I have
    - [ ] Once you get back all greens and no errors.... run `npm run dev`
    - [ ] createPostValidator changed the game when keeping spam profiles out.
    - [ ] Manage CRUD Users is the sweet spot where I went to sleep at 2:53am EST May 6, 2020 figuring it out "ha ha"
      - [x] Showing / Read all users  (`is` public but no identifying information of other users unless login)  

###  Express-Validator
 - [x] Start here for in depth [explaination](https://express-validator.github.io/docs/) 
 - [x] [Sanitization](https://express-validator.github.io/docs/sanitization.html) clean input 
 - [x] [Custom Validators](https://express-validator.github.io/docs/custom-validators-sanitizers.html)
 - [x] [Fixed the object issue with returning all users within mapped fields](https://github.com/Hawaiideveloper/nodeJS_SocialMediaSite/commit/bc72dfdca13b8af3bee701cba4caefa375df4aaa)
 - [ ] Refactor the base library and implement a custom security model
 - [x] Validation middlewares [(API)](https://express-validator.github.io/docs/check-api.html)  


For more information on [NodeJs Security](https://docs.mongodb.com/manual/core/security-scram/) or [Connections drivers](https://docs.mongodb.com/drivers/node) visit the corresponding links mentioned within this sentence.

Also be sure to checkout Regular expression site for [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) if you see somewhere I can improve, please test your expression, then submit a PR and I will give credit where it is due.  

