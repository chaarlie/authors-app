'use strict';

const AWS = require('aws-sdk'); 

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.delete = (event, context, callback) => {
    const author = JSON.stringify(event.body);
    
    if(!author.hasOwnProperty('id')) {
        callback(new Error('Not valid Id while removing item'));
    }

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
        id: author.id,
        },
    };

    dynamoDb.delete(params, (error) => {
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t remove the author.'));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify({}),
        }
        callback(null, response);
    });
};