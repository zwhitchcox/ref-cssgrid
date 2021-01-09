import * as React from 'react'
import './Form.scss'

const Form = () => (
  <form className="form1" action="">
    <div className="spacer" />
    <label className="first-name">First Name</label>
    <input id="firstName" type="text" />

    <div className="spacer" />
    <label className="last-name">Last Name</label>
    <input id="lastName" type="text" />

    <div className="spacer" />
    <label>Job</label>
    <input id="job" type="text" />

    <div className="spacer" />
    <label>Age</label>
    <input id="age" type="text" />

    <label>Email</label>
    <div className="spacer" />
    <input id="email" type="email" />

    <button>Submit</button>
  </form>
)

export default Form