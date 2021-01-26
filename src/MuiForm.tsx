import * as React from 'react'
import './MuiForm.scss'
import MuiInput from './MuiInput'

const MuiForm = () => (
  <div className="mui-form">
    <MuiInput />
    <MuiInput />
    <div className="full">
      <MuiInput />
    </div>
    <MuiInput />
    <MuiInput />
    <MuiInput />
    <MuiInput />
    <button>Submit</button>
  </div>
)

export default MuiForm
