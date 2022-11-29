import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {Card, Alert, Typography, Image, Space, MenuProps, Select, Form, Button, message} from 'antd';
import styles from './Welcome.less';
import {getStations, placeOrder, register} from "@/services/ant-design-pro/api";
import {SUBWAY_PICTURE} from "@/constants";
import Dropdown from 'antd/es/dropdown';
import {DownOutlined} from "@ant-design/icons";
import {history} from "@@/core/history";



const items=[
  {
    value: '黄河路',
    label: '黄河路',
  },
  {
    value: '关虎屯',
    label: '关虎屯',
  },
  {
    value: '省人民医院',
    label: '省人民医院',
  },
  {
    value: '紫荆山',
    label: '紫荆山',
  },
  {
    value: '郑州人民医院',
    label: '郑州人民医院',
  },
  {
    value: '河南博物院',
    label: '河南博物院',
  },
  {
    value: '海滩寺',
    label: '海滩寺',
  },
  {
    value: '大石桥',
    label: '大石桥',
  },
  {
    value: '二七广场',
    label: '二七广场',
  },
  {
    value: '人民公园',
    label: '人民公园',
  },
  {
    value: '郑州火车站',
    label: '郑州火车站',
  },
  {
    value: '西大街',
    label: '西大街',
  },
  {
    value: '人民路',
    label: '人民路',
  },
  {
    value: '东大街',
    label: '东大街',
  },
  {
    value: '陇海东路',
    label: '陇海东路',
  },
  {
    value: '燕庄',
    label: '燕庄',
  },
]

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const Welcome: React.FC = () => {

  const onFinish = async (values: API.OrderParams) => {
    const {start, des} = values;
    // 校验
    if (start == des) {
      message.error('请检查您输入的出发地与目的地');
      return;
    }
    try {
      const orderResult = await placeOrder(values);
      console.log("result : "+orderResult);
      message.success(orderResult);
    }catch (e){
      const defaultLoginFailureMessage = '下单失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <PageContainer>
      <div>
        <Image src={SUBWAY_PICTURE} width={200} />
      </div>
      <Card>
        <Alert
          message={'请选择您的出发地以及目的地'}
          // type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            rules={[{ required: true, message: '请选择出发地!' }]}
            name={'start'}
          >
            <Select
              id={'start'}
              showSearch
              style={{ width: '100%' }}
              placeholder="请选择出发地"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={items}
            />
          </Form.Item>
          <div></div>

          <Form.Item
            rules={[{ required: true, message: '请选择目的地!' }]}
            name={'des'}
          >
            <Select
              id={'des'}
              style={{ width: '100%' }}
              showSearch
              placeholder="请选择目的地"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={items}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </Card>
    </PageContainer>
  );
};

export default Welcome;
