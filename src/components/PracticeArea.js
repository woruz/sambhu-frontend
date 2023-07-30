import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import useSampleText from '../hooks/useSampleText';
import VariantsExample from './Spinner';
import Timer from './Timer';
import Dropdown from './Dropdown';

const PracticeArea = () => {
  const [show, setShow] = useState(false)
  const [timer, setTimer] = useState(false)
  const [sampleTextValue, setSampleTextValue] = useState()
  const [text, setText] = useState()
  const [showSubmit, setShowSubmit] = useState(false)

  const { isLoading, allSampleText, save_sample_text } = useSampleText()




  let open_modal = () => {
    setShow(!show)
  }

  let sample_text_handle_save = (sample) => {
    save_sample_text({
      userId: "6494824969281cd65c3ee494",
      paragraph: sample
    })
    setShow(false)
  }

  let change_handler = (e) => {
    e.preventDefault();

    setText(e.target.value)
  }

  let handle_submit = () => {
    
  }

  const Modal = () => {
    const [ctr, setCtr] = useState(0)
    const [sample, setSample] = useState('')

    useEffect(() => {
      setCtr(sample.split("").length)
    }, [sample])

    return (
      <>
        <div style={{ height: "55vh", width: "40rem", border: "solid", backgroundColor: "#edede9", display: "flex", flexDirection: "column", borderRadius: "5px" }}>
          <h4 style={{ margin: "1rem" }}>Sample Text Area</h4>
          <textarea style={{ marginLeft: "1rem", marginRight: "1rem" }} name="postContent" rows={10} cols={60} value={sample} onChange={(e) => {
            setSample(e.target.value)
          }} />
          <div style={{ margin: "1rem" }}>
            <Button variant="outline-success" onClick={() => sample_text_handle_save(sample)}>Save</Button>{" "}
            <Button variant="outline-danger" onClick={() => {
              setShow(false)
            }}>Cancel</Button>{" "}
            <Button variant="info">{ctr}</Button>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      {isLoading && <VariantsExample />}
      <Popup open={show} >
        <Modal />
      </Popup>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginLeft: "5rem", marginRight: "5rem" }}>
            <Button variant="success" style={{ marginTop: "5px", float: "left", width: "10rem" }} onClick={() => {
              setTimer(!timer)
              setShowSubmit(!showSubmit)
            }}>{timer ? "Pause Test" : "Start Test"}</Button>
          </div>
          <Dropdown allSampleText={allSampleText} />
          <div style={{ marginLeft: "5rem", marginRight: "5rem" }}>
            <Button variant="outline-info" style={{ marginTop: "5px", float: "right" }} onClick={open_modal}>Add Sample Paragraph</Button>
          </div>
        </div>
        <div style={{ height: "1rem", paddingTop: "3px", marginLeft: "5rem", marginRight: "5rem" }}>
          {timer && <Timer setShowSubmit={setShowSubmit} showSubmit={showSubmit}/>}
        </div>
      </div>

      <div style={{ marginLeft: "5rem", marginRight: "5rem", marginTop: "3rem" }}>
        <div>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <h4>Sample Paragraph</h4>
            <textarea name="postContent" readOnly={true} rows={7} value={allSampleText && allSampleText[0]?.paragraph} />
          </label>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <h4>Writtable Area</h4>
            <textarea name="postContent" rows={7} onChange={(e) => change_handler(e)} />
          </label>
        </div>
        <div style={{ height: "0.5rem", paddingTop: "10px", float: "right" }}>
          {timer && text && <Button onClick={handle_submit}>Submit</Button>}
        </div>
      </div>
    </>
  )
}

export default PracticeArea