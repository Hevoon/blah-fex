import React, { useState } from 'react'
import { createForm } from '@formily/core'
import { createSchemaField, FormConsumer } from '@formily/react'
import { Form, FormItem, Input, Select, Submit } from '@formily/antd'
import { message } from 'antd'
import { post } from '../../utils/http'
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

export default () => {
  const [loading, setLoading] = useState(false)
  const onSubmit = (e) => {
    let formDate = new FormData()
    formDate.append('name', e.name)
    formDate.append('category', e.category || '框架')
    formDate.append('content', e.content)
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    setLoading(true)
    post('/addTopic', formDate, config)
      .then(function () {
        setLoading(false)
        message.success('创建成功')
        // form.reset()
        const init = { name: '', category: '简答题', content: '' }
        if (!e.category) {
          init.category = ''
        }
        form.setValues(init)
      })
      .catch((e) => console.log(e))
  }
  return (
    <div className="add">
      <Form form={form} onAutoSubmit={onSubmit}>
        <SchemaField>
          <SchemaField.String
            required
            name="select"
            title="录入类型"
            default="v2"
            enum={[
              { label: '框架', value: 'v1' },
              { label: '真题题目', value: 'v2' },
            ]}
            x-component="Select"
            x-decorator="FormItem"
            x-reactions={[
              {
                target: 'name',
                fulfill: {
                  // state: {
                  //   display: '{{$self.value}}',
                  // },
                  schema: {
                    title: '{{$self.value === "v1"?"书籍名称" :"真题题目"}}',
                  },
                },
              },
              {
                target: 'content',
                fulfill: {
                  schema: {
                    title: '{{$self.value === "v1"?"框架章节" :"题目内容"}}',
                    'x-component':
                      '{{$self.value === "v1"?"Input" :"TextArea"}}',
                  },
                },
              },
              {
                target: 'category',
                fulfill: {
                  state: {
                    visible: '{{$self.value === "v2"}}',
                  },
                },
              },
            ]}
          />
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
            default="简答题"
            required
            enum={[
              { label: '简答题', value: '简答题' },
              { label: '名词解释', value: '名词解释' },
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
        <div className='btn'>
          <Submit block size="large" loading={loading}>
            录入
          </Submit>
        </div>
      </Form>
    </div>
  )
}
