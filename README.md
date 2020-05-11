# Node JS project for a social media site

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

