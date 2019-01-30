'use strict';

const AWS = require('aws-sdk'); 

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const author = JSON.parse(event.body);
  
  if(
    author.hasOwnProperty('name') &&
    author.hasOwnProperty('email') &&
    author.hasOwnProperty('birthDate') &&
    author.hasOwnProperty('publications') 
  ){
    if(author.publications > 0) {
      let incompletes = author.publicationList.filter((p) => {
        if(!p.hasOwnProperty('date') ||
           !p.hasOwnProperty('body') ||
           !p.hasOwnProperty('title')
         )   
         return true;
      });

      incompletes.length == 0 || callback( new Error('Publication doesnt match schema')); 
   }
  }
  else {
    return new Error('Publication doesnt match schema'); 
  } 
  
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: author.id,
    },
    ExpressionAttributeValues: {
      ':authorName': author.name,
      ':authorEmail':author.email,
      ':authorBirthDate': author.birthDate,
      ':authorPublications': author.publications,
    },
    UpdateExpression: 'SET name = :authorName, email = :authorEmail, publications = :authorPublications',
    ReturnValues: 'ALL_NEW',
  };

  dynamoDb.update(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t update the todo item.'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};