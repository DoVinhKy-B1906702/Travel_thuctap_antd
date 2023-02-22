import React from 'react'
import ButtonAnimate from '../ButtonAnimate/ButtonAnimate';
const TestButton = () => {
    const handleClick= () => {
        console.log('okk')
    }
  return (
    <div style={{background: 'black', paddingTop: '100px'}}>
        <ButtonAnimate color='red' onClick={handleClick} text='ihih' />
    </div>
  )
}

export default TestButton