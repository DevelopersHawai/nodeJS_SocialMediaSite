//review video at 9:42

exports.createPostValidator = (req, res, next) => {
    //title
    req.check("title", "Write a title").notEmtpy();
    req.check("title", "title must be between 4 to 200 characters").isLength({
        min: 4,
        max: 200
    }); 
        //body
        req.check("body", "When GOD chooses your talent, there is no stopping you").notEmtpy();
        req.check("title", "Title must be between 4 to 2000 characters").isLength({
            min: 4,
            max: 2000
        }); 
        //check for errors
        const errors = req.validationErrors();
         // error show the first one as rhey happen
         
         if(errors) {
             const firstError = errors.map((error => error.msg)[0];
             return res.status(400).json({error: firstError});
         }
         // Proceed to next middleware
         next();
         };

