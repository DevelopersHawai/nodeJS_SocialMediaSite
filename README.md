# Node JS project for a social media site

If you have not done so, please do so now and familiarize yourself with the issues tab.

Issues are going to be the fastest way to answer your own questions and to ask for help.  
 
 
You will need:  
- [ ] database connection called [MongoDB](https://www.mongodb.com/cloud/atlas) 
- [ ] an "env file that has your code base enviromental variables.  


Please create an ".env" file in the root of the project's directory.




Then place the contents here inside it

```
MONGO_URI="mongodb+srv://YourUserNameHere:YourPasswordHere@TheURLofServer/test?retryWrites=true&w=majority"

PORT=8080
```

For more information on [NodeJs Security](https://docs.mongodb.com/manual/core/security-scram/) or [Connections drivers](https://docs.mongodb.com/drivers/node) visit the corresponding links mentioned within this sentence.


#### To Start the project out of the box:
- [ ] type: `npm install` inside a terminal window
    - [ ] If you have issues verify that the package.json mataches what I have
    - [ ] Once you get back all greens and no errors.... run `npm run dev`