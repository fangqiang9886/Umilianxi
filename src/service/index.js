// import request, { extend } from 'request';
// import { request } from 'umi'
import request from 'umi-request';


export const getRemoteList = async params => { 
  return request('http://public-api-v1.aspirantzhang.com/users', {
  method: 'get',
})
  .then(function(response) {
    // console.log(response);
    return response;
  })
  .catch(function(error) {
    console.log(error);
  });
};
export const editRecord = async ({ id, values }) => { 
  // console.log(id,values);
  
  return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'put',
    data:values,
})
  .then(function(response) {
    console.log('ok');
    // return response;
  })
  .catch(function(error) {
    console.log(error);
  });
};
export const deleteRecord = async ({ id }) => {
  return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'delete',
  })
    .then(function(response) {
      return true;
    })
    .catch(function(error) {
      return false;
    });
};