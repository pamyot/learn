
module.exports = function(SwaggerApi) {

/**
 * Create a new word list.
 * @param {WordList} wordList word list
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.postWordList = function(wordList, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Update an existing word list.
 * @param {any} undefined undefined
 * @param {WordList} wordList word list
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.postWordListWordListId = function(wordList, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Unable to update the word list.');
  err0.statusCode = 409;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Word list doesn't exists.');
  err1.statusCode = 410;
  return cb(err1);
  */ 
}

/**
 * Get a word list.
 * @param {any} undefined undefined
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.getWordListWordListId = function(callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Delete the word list.

 * @param {any} undefined undefined
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.deleteWordListWordListId = function(callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Unable to update the word list.');
  err0.statusCode = 409;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Word list doesn't exists.');
  err1.statusCode = 410;
  return cb(err1);
  */ 
}



SwaggerApi.remoteMethod('postWordList',
  { isStatic: true,
  accepts: 
   [ { arg: 'wordList',
       type: 'WordList',
       description: 'word list',
       required: undefined,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/wordList' },
  description: 'Create a new word list.' }
);

SwaggerApi.remoteMethod('postWordListWordListId',
  { isStatic: true,
  accepts: 
   [ { arg: undefined,
       type: 'any',
       description: undefined,
       required: undefined,
       http: { source: undefined } },
     { arg: 'wordList',
       type: 'WordList',
       description: 'word list',
       required: undefined,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/wordList/:wordListId' },
  description: 'Update an existing word list.' }
);

SwaggerApi.remoteMethod('getWordListWordListId',
  { isStatic: true,
  accepts: 
   [ { arg: undefined,
       type: 'any',
       description: undefined,
       required: undefined,
       http: { source: undefined } } ],
  returns: [],
  http: { verb: 'get', path: '/wordList/:wordListId' },
  description: 'Get a word list.' }
);

SwaggerApi.remoteMethod('deleteWordListWordListId',
  { isStatic: true,
  accepts: 
   [ { arg: undefined,
       type: 'any',
       description: undefined,
       required: undefined,
       http: { source: undefined } } ],
  returns: [],
  http: { verb: 'delete', path: '/wordList/:wordListId' },
  description: 'Delete the word list.\n' }
);

}
