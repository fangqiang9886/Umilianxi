import React from 'react';
import {Modal,Button} from 'antd';

const UserModal = (props) => {
  console.log(props);
  
  return(
    <div>
      <Modal
      title="Basic Modal"
      visible={props.visible}
      ></Modal>
    </div>
  )
}
export default UserModal;