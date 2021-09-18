import React, { useState } from 'react'
import { Table, Radio, Button, message } from 'antd'
import {
  useRecoilState,
} from 'recoil'
import { get } from '../../utils/http'
import moment from 'moment'
import { topic, framework } from '../../store'
import './index.css'
const columns1 = [
  {
    title: '书籍名称',
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
    title: '框架章节',
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
]
const columns2 = [
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
    render: (e) => {
      return moment(e).format('YYYY-MM-DD')
    },
  },
]

const Find = () => {
  const [data1, setData1] = useRecoilState(framework) || []
  const [data2, setData2] = useRecoilState(topic) || []
  // const [data1, setData1] = useState([])
  // const [data2, setData2] = useState([])
  const [loading1, setloading1] = useState(false)
  const [loading2, setloading2] = useState(false)
  const find = async () => {
    setloading1(true)
    const res = await get('/getFramework')
    setloading1(false)
    if (!res.data || res.data.length < 1) {
      message.info('未录入框架')
    }
    setData1(res.data)
  }
  const find1 = async () => {
    setloading2(true)
    const res = await get('/getTopic')
    if (!res.data || res.data.length < 1) {
      message.info('未查询到数据')
    }
    setloading2(false)
    setData2(res.data)
  }
  return (
    <div className={'find'}>
      <div
        style={{
          fontSize: '20px',
          fontWeight: 800,
          width: '100%',
          marginBottom: '16px',
        }}
      >
        框架默写
      </div>
      <Button type="primary" size={'large'} onClick={find} loading={loading1}>
        查询框架
      </Button>
      <Table
        columns={columns1}
        dataSource={data1}
        className={'table1'}
        pagination={false}
      />
      <div
        style={{
          fontSize: '20px',
          fontWeight: 800,
          width: '100%',
          marginBottom: '16px',
        }}
      >
        模拟练题
      </div>
      <Button type="primary" size={'large'} onClick={find1} loading={loading2}>
        获取模拟练题
      </Button>
      <Table
        columns={columns2}
        dataSource={data2}
        className={'table2'}
        pagination={false}
      />
    </div>
  )
}

export default Find
