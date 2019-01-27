'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const response =  {
    statusCode: 0,
    body: ''
};

module.exports.create = async (event, context ) => {
    const author = JSON.parse(event.body);

    if(author.publications > 0) {
       let incompletes = author.publicationList.filter((p) => {
         if(!p.hasOwnProperty('date') ||
            !p.hasOwnProperty('body') ||
            !p.hasOwnProperty('title')
          )   
          return true;
       });

       if(incompletes.length ) return new Error('Publication doesnt match schema');  
    }
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            name: author.name,
            email: author.email,
            birthDate: author.birthDate,
            publications: [ ...author.publications ]
        }
    };

    // return await s3.getObject(params).promise()
    // .then((res) => {
    //     return res.Body.toString('utf-8');
    // })
    // .catch((err) => {
    //     return err;
    // });

    return await dynamoDb.put(params).promise()
    .then((res) =>  res )
    .catch((err) =>   err);
    
    // let result;
    // try {
    //       result = await dynamoDb.put(params);
     
    // } catch(error) {
    //     console.log(error)
    //       result = error.message;
    // }

    // return result;
};