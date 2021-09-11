import React from 'react'
import Left from './left'
import './index.css'
import Center from './center'

const WrapperContent = () => {
  console.log('fick')
  return (
    <div className={'box'}>
      <Left></Left>
      <Center></Center>
    </div>
  )
}

export default React.memo(WrapperContent)
