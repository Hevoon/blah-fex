import React, { useState, useEffect } from 'react'
import { Table, Input as AInput, Button, Modal } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useDebounceFn } from 'ahooks'
import { get, post } from '../../utils/http'
import moment from 'moment'
import { createForm } from '@formily/core'
import { createSchemaField, FormConsumer } from '@formily/react'
import { Form, FormItem, Input, Select, Submit } from '@formily/antd'
import './index.css'

const { TextArea } = Input

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    Input,
    TextArea,
  },
})
const All = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(1)
  const [total, setTotal] = useState(10)
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [init, setInit] = useState({})
  const [id, setId] = useState('')
  const find = async () => {
    setLoading(true)
    const res = await get(`/getAll?current=${current}&&search=${search}`)
    setLoading(false)
    setData(res.data.data)
    setTotal(res.data.total)
    const max =
      total / 10 > Math.floor(total / 10)
        ? Math.floor(total / 10) + 1
        : Math.floor(total / 10)
    if (max < current) {
      setCurrent(max || 1)
    }
  }
  useEffect(() => {
    find()
  }, [current, search])
  const { run } = useDebounceFn(
    async (e) => {
      setCurrent(1)
      setSearch(e)
    },
    { wait: 500 }
  )
  const deleteTopic = async (id) => {
    setLoading(true)
    let formDate = new FormData()
    formDate.append('id', id)
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    await post(`/delete`, formDate, config)
    await find()
    setLoading(false)
  }
  const onOpen = (e) => {
    setInit({ name: e.name, category: e.category, content: e.content })
    form.setValues({
      name: e.name,
      category: e.category,
      content: e.content,
    })
    console.log(e)
    setId(e.id)
    setVisible(true)
  }
  const handleEditor = async () => {
    setLoading(true)
    setVisible(false)
    const e = form.values
    console.log(e)
    let formDate = new FormData()
    formDate.append('id', id)
    formDate.append('name', e.name)
    formDate.append('category', e.category)
    formDate.append('content', e.content)
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    await post(`/update`, formDate, config)
    await find()
    setLoading(false)
  }

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      render: (e) => {
        return (
          <span
            style={{ width: '200px', display: 'flex', marginRight: '-180px' }}
          >
            {e}
          </span>
        )
      },
    },
    {
      title: '题目类型',
      dataIndex: 'category',
      width: 200,
    },
    {
      title: '描述',
      dataIndex: 'content',
      render: (e) => {
        return (
          <span
            style={{ width: '200px', display: 'flex', marginRight: '-180px' }}
          >
            {e}
          </span>
        )
      },
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      width: 200,
      render: (e) => {
        return moment(e).format('YYYY-MM-DD')
      },
    },
    {
      title: '操作',
      width: 200,
      render: (e) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button
              type="primary"
              onClick={() => onOpen(e)}
              style={{ marginRight: '8px' }}
            >
              编辑
            </Button>
            <Button
              danger
              onClick={() => {
                deleteTopic(e.id)
              }}
            >
              删除
            </Button>
          </div>
        )
      },
    },
  ]
  return (
    <div className={'find'}>
      <AInput
        placeholder="请输入题目名字"
        allowClear
        prefix={<SearchOutlined></SearchOutlined>}
        size="large"
        onChange={({ target: { value } }) => {
          setInputValue(value)
          run(value)
        }}
        value={inputValue}
      />
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        className={'table2'}
        title={() => '题库'}
        pagination={{ current, total, pageSize: 10 }}
        onChange={(p) => {
          setCurrent(p.current)
        }}
      />
      <Modal
        visible={visible}
        destroyOnClose
        onOk={handleEditor}
        onCancel={() => setVisible(false)}
        okText={'提交'}
        cancelText="取消"
        width={'60%'}
      >
        <Form form={form} className={'form-box'}>
          <SchemaField>
            <SchemaField.String
              name="name"
              title="真题题目"
              x-component="Input"
              x-decorator="FormItem"
              required
            />
            <SchemaField.String
              name="category"
              title="题目类别"
              x-component="Select"
              x-decorator="FormItem"
              default="名词解释"
              required
              enum={[
                { label: '名词解释', value: '名词解释' },
                { label: '简答题', value: '简答题' },
                { label: '论述题', value: '论述题' },
                { label: '综合题', value: '综合题' },
              ]}
            />
            <SchemaField.String
              name="content"
              title="题目内容"
              x-component="TextArea"
              x-decorator="FormItem"
              required
            />
          </SchemaField>
        </Form>
      </Modal>
    </div>
  )
}

export default All
