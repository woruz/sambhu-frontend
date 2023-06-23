import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';

const PracticeArea = () => {
  const [show, setShow] = useState(false)

  let open_modal = () => {
    setShow(!show)
  }

  let sample_text_handle_save = () => {
    setShow(false)
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
          <h4 style={{margin: "1rem"}}>Sample Text Area</h4>
          <textarea style={{marginLeft: "1rem", marginRight: "1rem"}} name="postContent" rows={10} cols={60} value={sample} onChange={(e) => {
            setSample(e.target.value)
          }} />
          <div style={{margin: "1rem"}}>
            <Button variant="outline-success" onClick={sample_text_handle_save}>Save</Button>{" "}
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
      <Popup open={show} >
        <Modal />
      </Popup>
      <div style={{marginLeft: "5rem", marginRight: "5rem" }}>
        <Button variant="outline-info" style={{marginTop: "5px", float: "right"}} onClick={open_modal}>Add Sample Paragraph</Button>
      </div>
      <div style={{marginLeft: "5rem", marginRight: "5rem", marginTop: "4rem" }}>
        <div>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <h4>Sample Paragraph</h4>
            <textarea name="postContent" readOnly={true} rows={7} value="Hello World Hii i am sabil"/>
          </label>
        </div>

        <div style={{marginTop: "1rem"}}>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <h4>Writtable Area</h4>
            <textarea name="postContent" rows={7} />
          </label>
        </div>
      </div>
    </>
  )
}

export default PracticeArea