# Node JS project for a small social media site is based on:
MERN - MongoDB, Express, React, NodeJs

## Why this project:

When the [covid-19]() virus spread into the world, as of May 11, 2020 (19:26 GMT) there 4,235,237 cases of the virus and over 285,946 deaths.  People are concerned with socially interacting with one another physically and
many nations have closed their borders to prevent the spread and contagious disaster from multiplying.



### [Written in ES6 JavaScript](http://es6-features.org/#Constants) 
___To ensure all browsers are funtional are functional, and the application can be used by:___
- iOS
- Android
- Microsoft
- Linux

Choosing this platform for avoiding compatibility issues will be key to the usage of posterity.  As the platform evolves we will implement newer technoloies.
 
### [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript#10th_Edition_-_ECMAScript_2019):
__The ECMAScript specification is a standardized specification of a scripting language developed by Brendan Eich of Netscape; initially it was named Mocha, later LiveScript, and finally JavaScript. In December 1995, Sun Microsystems and Netscape announced JavaScript in a press release.__



### [NodeJs](https://nodejs.org/en/about/)
___Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.  V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application.___


### [MongoDB](https://www.mongodb.com/download-center/community)
___MongoDB Atlas is a fully-managed and fully-automated global cloud database service available on AWS, Azure, and Google Cloud.___
which features the most comprehensive support and the best SLA when you run MongoDB on your own infrastructure. MongoDB Enterprise Advanced also gives you comprehensive operational tooling, advanced analytics and data visualization, platform integrations and certification, along with on-demand training for your teams.

MongoDB Enterprise Server comes with:

- In-memory Storage Engine - deliver high throughput and predictable low latency

- Encrypted Storage Engine - encrypt your data at rest

- Advanced Security - secure your data with LDAP and Kerberos access controls, automatic field-level encryption, and comprehensive auditing


### [React](https://reactjs.org/docs/getting-started.html)

___React is a JavaScript library for building user interfaces.___


### [Express](https://expressjs.com)
___Fast, unopinionated, minimalist web framework for Node.js___

---



#### To start the project please delete any node_module folders you may have folder

Issue command: This will install all dependencies 
`npm install`

Finally issue comand 
`npm run dev`

If you have not done so, please do so now and familiarize yourself with the issues tab.

Issues are going to be the fastest way to answer your own questions and to ask for help.  
 
 
You will need:  
- [ ] database connection called [MongoDB](https://www.mongodb.com/cloud/atlas) 
- [ ] an "env file that has your code base enviromental variables.  


Please create an ".env" file in the root of the project's directory.




## Then place the contents here inside it (.env)
### Read how to setup a MongoDB  Atlast cluster and connecting to it using NodeJS API here below:
[Setting up](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/) a MondoDB Cluster
[Connecting to a MondoDB Cluster](https://docs.atlas.mongodb.com/driver-connection/) using NodeJS

```
MONGO_URI="mongodb+srv://YourUserNameHere:YourPasswordHere@TheURLofServer/test?retryWrites=true&w=majority"

PORT=8080
```

For more information on [NodeJs Security](https://docs.mongodb.com/manual/core/security-scram/) or [Connections drivers](https://docs.mongodb.com/drivers/node) visit the corresponding links mentioned within this sentence.


Implemented the re-usage of http codes so that the user is restricted within 
### HTTP Status Codes

- See link [here](error_code_definitions.md)


#### To Start the project out of the box:
- [ ] type: `npm install` inside a terminal window
    - [ ] If you have issues verify that the package.json mataches what I have
    - [ ] Once you get back all greens and no errors.... run `npm run dev`
    - [ ] createPostValidator changed the game when keeping spam profiles out.
    - [ ] Manage CRUD Users is the sweet spot where I went to sleep at 2:53am EST May 6, 2020 figuring it out "ha ha"
      - [x] Showing / Read all users  (`is` public but no identifying information of other users unless login)  
### User Profile features

- [x] Create and Setup Tokens for users so required sign is needed to view other users' profile
- [x] Read Show a user profile
- [x] Update User complete, as user must be authenticated to update their own profile
- [x] Delete User, Now accessible, for those who want to terminate membership


### Post Features

- [ ] Create a Post
    - [x] Add title (prints the input digested)
    - [x] Add body  (prints the input digested)
    - [ ] Add photo(s)
- [x] Get all posts by all users [does not require login](https://github.com/Hawaiideveloper/nodeJS_SocialMediaSite/blob/0c7a360a5c48154986ce8a158b5021624b452ce3/routes/post.js#L24)
    - [x] Get posts by a particular user
- [x] Delete a post feature (so that people can save their reputation if things get wonky)
      - [x] In case someone tries to delete someone's else post they will be denied
      - [x] Security on the post to prevent random deletion
- [x] Update a post
     - [x] update a title
     - [x] update a body



## Cross-Orgin Resource Sharing (CORS) | MDN
- [ ] Sharing that allows restricted resources on a webpage
  - [ ] Usually requested from another domain outside the domain you are in
    - [ ] Example private port serves on 8080
    - [ ] Backend public port serves on 3000


## FrontEnd 

- [ ] Visual webpage for public
  - [ ] Setting up the end points for sessions with definitions 



## Marketing / Launching Plan
- [ ] To be review on LHH site





### A Special Thanks to:

- Ryan Dhungel - giving me a new insight on code
- Damaris Tercero - the endless food and coffee
- Sandra Quel - encouragement and being a good friend
- Lillie from (LHH) for making things urgent and giving me deadlines



### Packages used and gratitude to the contributors of:
- The packages below  
 
      - npm i dotenv
      - npm i mongodb
      - npm i mongoose
      - npm i body-parser
      - npm i body-parser
      - npm i express-validator
      - npm i uuid
      - npm i uuidv1
      - npm i jsonwebtoken
      - npm i cookie-parser
      - npm i express-jwt
      - npm i lodash
      - npm i cors