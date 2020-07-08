// import request, { extend } from 'request';
// import { request } from 'umi'
import request from 'umi-request';


export const getRemoteList = async params => { 
  return request('http://public-api-v1.aspirantzhang.com/users', {
  method: 'get',
})
  .then(function(response) {
    console.log(response);
    return response;
  })
  .catch(function(error) {
    console.log(error);
  });
};