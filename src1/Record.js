import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, TimePicker } from 'antd';
import dayjs from 'dayjs';
const format = 'mm:ss';
const Record = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item {...restField} name={[name, 'start']}>
                  <TimePicker format={format} />
                  {console.log(restField)}
                </Form.Item>
                <Form.Item {...restField} name={[name, 'end']}>
                  <TimePicker format={format} />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  rules={[
                    {
                      required: true,
                      message: '确实间隔时间',
                    },
                  ]}
                >
                  <Input placeholder="间隔时间" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Record;
