import * as React from 'react'
import './MuiInput.scss'

const MuiInput = () => (
    <div className="form-input">
      <label>
        <input required />
        <span className="placeholder">Text Input</span>
      </label>
    </div>

)

export default MuiInput
  // <div className="form-1">
    // <div className="form-input">
    //   <label>
    //     <textarea rows={10} required></textarea>
    //     <span className="placeholder">Textarea</span>
    //   </label>
    // </div>
  // </div>