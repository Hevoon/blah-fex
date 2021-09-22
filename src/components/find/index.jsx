import React, { useState, useEffect } from 'react'
import { Table, Radio, Button, message } from 'antd'
import { useRecoilState } from 'recoil'
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
  useEffect(() => {
    const value1 = localStorage.getItem('framework')
    const value2 = localStorage.getItem('topic')
    setData1(JSON.parse(value1))
    setData2(JSON.parse(value2))
  }, [])
  const clear1 = () => {
    localStorage.removeItem('framework')
    message.info('已清除抽到的框架')
  }
  const clear2 = () => {
    localStorage.removeItem('topic')
    message.info('已清除抽到的题目')
  }
  const find = async () => {
    setloading1(true)
    const value = localStorage.getItem('framework')
    if (!value) {
      const res = await get('/getFramework')
      setloading1(false)
      if (!res.data || res.data.length < 1) {
        message.info('未录入框架')
      }
      const stringData = JSON.stringify(res.data)
      window.localStorage.setItem('framework', stringData)
      setData1(res.data)
    } else {
      message.info('本地已存在抽到的题目')
      setData1(JSON.parse(value))
      setloading1(false)
    }
  }
  const find1 = async () => {
    setloading2(true)
    const value = localStorage.getItem('topic')
    if (!value) {
      const res = await get('/getTopic')
      if (!res.data || res.data.length < 1) {
        message.info('未查询到数据')
      }
      setloading2(false)
      const stringData = JSON.stringify(res.data)
      window.localStorage.setItem('topic', stringData)
      setData2(res.data)
    } else {
      message.info('本地已存在抽到的题目')
      setData2(JSON.parse(value))
      setloading2(false)
    }
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
      <Button type="primary" size={'large'} style={{marginLeft:'20px'}} onClick={clear1}>
        清除本地框架
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
      <Button type="primary" style={{marginLeft:'20px'}} size={'large'} onClick={clear2}>
        清除本地题目
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
