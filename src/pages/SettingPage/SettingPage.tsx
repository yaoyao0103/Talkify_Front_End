import React from 'react'
import Outer from '../../components/Outer/Outer'
import Navbar from '../../components/Navbar/Navbar'

type Props = {}

const SettingPage = (props: Props) => {
  return (
    <div>
      <Outer>
        <Navbar />
      </Outer>
    </div>
  )
}

export default SettingPage