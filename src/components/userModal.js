import React ,{ useEffect} from 'react';
import { Modal, Button, Form, Input, Switch, DatePicker } from 'antd';

const UserModal = props => {
  const { visible, record, closeHandler,onFinish } = props;
  // console.log(record);
  // console.log('11212', props,);
  const [form] = Form.useForm();
  // console.log(form);
  const onOk = () => {
    form.submit();
  };
 

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    form.setFieldsValue(record);
  },[visible])
  return (
    <div>
      <Modal title="Basic Modal"
        visible={visible}
        onOk={onOk}
        forceRender
        onCancel={closeHandler}>
       <Form
          // {...layout}
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // initialValues={record}
        >
         
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Create Time" name="create_time">
        
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status">
           
            <Input />
          </Form.Item>
        </Form>
        {/* {JSON.stringify(props.record)} */}
      </Modal>
    </div>
  );
};
export default UserModal;
