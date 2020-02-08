# BE

Product Canvas: https://docs.google.com/document/d/1ebpPtelsof6N9DBCmSFvYLjhsfrernSXP-SVlNVffgA/edit?ts=5e322180#

Register Route: https://gigapetapi.herokuapp.com/api/register accepts username and password in json

Login Route: https://gigapetapi.herokuapp.com/api/login accepts username and password in json no default login credentials

Get foods: https://gigapetapi.herokuapp.com/api/food/:id get a list of foods per user

Post foods: https://gigapetapi.herokuapp.com/api/add/:id add foods to list of foods per user add the date, category and serving size and you will need to put in user_id: req.params.id in the request body for this to work

Put foods: https://gigapetapi.herokuapp.com/api/update/:id update food by id again you will need to put user_id: req.params.id in the request body as well as have the id itself returned in the request body you can edit anything that was in the initial post

Delete food: https://gigapetapi.herokuapp.com/api/remove/:id needs a food id to delete the food but the get foods should return that just fine
