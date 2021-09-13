import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const { SubMenu } = Menu

const WrapperMenu = () => {
  const history = useHistory()
  const push = (key) => {
    history.push(`/${key.key}`)
  }
  return (
    <Menu
      onClick={push}
      style={{
        width: 256,
        height: '100%',
        flexBasis: '256px',
        flexGrow: 0,
        flexShrink: 0,
        background: 'rgba(81, 47, 124, 0.1)',
      }}
      defaultSelectedKeys={['find']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="操作中心">
        {/* <Menu.ItemGroup key="g1" title="题目"> */}
        <Menu.Item key="find">抽取题目</Menu.Item>
        <Menu.Item key="add">录入题目</Menu.Item>
        <Menu.Item key="all">题库</Menu.Item>
        {/* </Menu.ItemGroup> */}
      </SubMenu>
    </Menu>
  )
}

export default WrapperMenu
