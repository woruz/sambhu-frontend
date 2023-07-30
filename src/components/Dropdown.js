import React, { useState } from 'react'
import Select from 'react-select'

const Dropdown = (props) => {
  let {
    allSampleText
  } = props

  let options = []
  {allSampleText && allSampleText.length && allSampleText.forEach(sample => {
    let {_id,wordLimit} = sample
    options.push({ value: _id, label: wordLimit })
  })}
  const [isClearable, setIsClearable] = useState(true);
  return (
    <div style={{marginTop: "5px"}}>
        <Select isClearable={isClearable} options={options} />
    </div>
  )
}

export default Dropdown