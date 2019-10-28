'use strict';

const AWS = require('aws-sdk'); 

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.getAll = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  dynamoDb.scan(params, (error, result) => {
  
  if (error) {
    console.error(error);
    callback(new Error('Couldn\'t fetch the authorss.'));
    return;
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(result.Items),
  };
     callback(null, response);
  });
};