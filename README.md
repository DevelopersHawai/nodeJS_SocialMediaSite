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


#### To Start the project out of the box:
- [ ] type: `npm install` inside a terminal window
    - [ ] If you have issues verify that the package.json mataches what I have
    - [ ] Once you get back all greens and no errors.... run `npm run dev`
    - [ ] createPostValidator changed the game when keeping spam profiles out.
    - [ ] Manage CRUD Users is the sweet spot where I went to sleep at 2:53am EST May 6, 2020 figuring it out "ha ha"
      - [x] Showing / Read all users  (`is` public but no identifying information of other users unless login)  
      - [x] Show a user profile
      - [x] Create and Setup Tokens for users so required sign is needed to view other users' profile
      - [x] Update User complete, as user must be authenticated to update their own profile
      - [x] Delete User, Now accessible, for those who want to terminate membership, provides a message similar to:
```
 "User Deleted successfully"
```
- [ ] User Posts:
    - [x] Add title
    - [x] Add body 
    - [ ] Add photo(s)

* I found out that the video I made was taking too much time to pull and push.  Rather than modify the code base ridiciously, it is wiser to post to youtube and reference the link of its beginnings [here_link not ready]()


Known issues to contributors outside of the USA
If git gives you an issue like:
"fatal: The remote end hung up unexpectedly"
Please run `git config http.postBuffer 524288000`

The above is due to the large file sizes embeded into the project.