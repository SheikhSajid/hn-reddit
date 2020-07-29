const fs = require('fs');
const dummyIds = require('./dummyTopPostIds');
const fetch = require('node-fetch');

var file = fs.createWriteStream('.\\src\\dummyTopPosts.js');
file.on('error', function(err) { 
  console.error(err);
  process.exit(1);
});

file.write('export default [');
const reqs = [];
const noOfReqs = 10;



for (let i = 0; i < noOfReqs; i++) {
  const id = dummyIds[i];
  const req = fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  
  // req
  //   .then(res => res.json())
  //   .then(res => {
  //     // let resStr = JSON.stringify(res, null, 2);
  //     // console.log(resStr)
  //     // file.write(resStr + ',\n')
  //     // console.log(res)
  //     results[id] = res;
  //     console.log('req seq: ' + i)
  //   })
  
  reqs.push(req);
}


Promise.all(reqs).then(responses => {
  responses.forEach(res => {
    // console.log(res.json())
    res.json().then(res => {
      let resStr = JSON.stringify(res, null, 2);
      file.write(resStr + ',\n')
    })
    .catch(err => console.log('Secondary p err: ' + err))
  })
  // file.write(']');
  // file.end();

});
