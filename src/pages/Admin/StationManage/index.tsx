import React from 'react';
import {Button, Checkbox, Form, Input, message} from 'antd';
import {addStation, register} from "@/services/ant-design-pro/api";

const App: React.FC = () => {
  const onFinish = async (values: API.Station) => {

    try {
      // 注册
      const id = await addStation(values);
      if (id) {
        const defaultLoginSuccessMessage = '添加站点成功！';
        message.success(defaultLoginSuccessMessage);
        /** 此方法会跳转到 redirect 参数所在的位置 */
        return;
      }
    } catch (error: any) {
      const defaultLoginFailureMessage = "添加站点失败，请重试！";
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="stationName"
        name="stationName"
        rules={[{
          required: true,
          message: '请输入站点名称!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="stationRoute"
        name="stationRoute"
        rules={[{ required: true, message: '请输入站点所在的线路!' }]}
      >
        <Input />
      </Form.Item>

      {/*<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>*/}
      {/*  <Checkbox>Remember me</Checkbox>*/}
      {/*</Form.Item>*/}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          添加站点
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
