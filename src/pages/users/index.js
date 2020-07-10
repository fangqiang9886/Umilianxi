import styles from './index.css';
import React, { useState, useRef, FC } from 'react';
import {
  Table,
  Tag,
  Divider,
  Popconfirm,
  message 
} from 'antd';
// import { connect, Dispatch, Loading, UserState, useModel } from 'umi';
import { connect, useSelector } from 'dva';
import UserModal from '../../components/userModal'


 const UserListPage =(props)=> {
  //  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [record, setRecord] = useState(undefined);
   const { users,dispatch } = props;
   console.log(props);
   
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      valueType: 'text',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Create Time',
      dataIndex: 'create_time',
      valueType: 'dateTime',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      valueType: 'option',
      render: (text, record) => (
        <span>
          <a onClick={() => {
            editHandler(record);
          }}>Edit</a>&nbsp;
          <Popconfirm
          title="Are you sure delete this user?"
          onConfirm={() => {
            deleteHandler(record.id);
          }}
          okText="Yes"
          cancelText="No"
        >
          <a>Delete</a>
        </Popconfirm>,
        </span>
      ),
    },
  ];
  //  console.log(recoed);
   const deleteHandler = (id) => {
     dispatch({
       type: 'users/delete',
       payload: {
         id,
       }
     })
   }
  const editHandler = (record) => {
    setModalVisible(true);
    setRecord(record);
  };
  const closeHandler = () => {
    setModalVisible(false);
  };
  const onFinish = values => {
    // console.log('Success:', values);
    const id = record.id;
    dispatch({
      type: 'users/edit',
      payload: {
        id,
        values
      },
    })

  };
  return (
    <div className={styles.list}>
        <Table columns={columns} dataSource={users.data} rowKey='id'/>
      <UserModal
        visible={modalVisible}
        record={record}
        closeHandler={closeHandler}
        onFinish={onFinish}
      ></UserModal>
    </div>
  );
}
const mapStateToProps = ({
  users,
}) => {
  return {
    users,
  };
};
export default connect (mapStateToProps) (UserListPage);
// export default index;