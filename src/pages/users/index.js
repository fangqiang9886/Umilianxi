import styles from './index.css';
import React, { useState, useRef, FC } from 'react';
import {
  Table,
  Tag,
  Divider
} from 'antd';
// import { connect, Dispatch, Loading, UserState, useModel } from 'umi';
import { connect, useSelector } from 'dva';
import UserModal from '../../components/userModal'


 const UserListPage =(props)=> {
  //  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
   const {users}= props;
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
      render: (text, record) => (
        <span>
          <a onClick={() => {
            setModalVisible(true);
          }}>Edit</a>&nbsp;
          <a>Delete</a>
        </span>
      ),
    },
  ];
   
  /* const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ] */
  return (
    <div className={styles.list}>
        <Table columns={columns} dataSource={users.data} />
        <UserModal visible={modalVisible} ></UserModal>
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