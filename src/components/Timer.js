import React,{useState,useEffect} from 'react'
import Countdown from 'react-countdown'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Timer = ({setShowSubmit, showSubmit}) => {
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    useEffect(() => {
      if(hour == 0 && minute == 0 && second == 0){
        setShowSubmit(!showSubmit)
      }
    }, [hour,minute,second])
    
    const endDate = new Date('2023-07-07T23:59:00')
    const renderer = ({ days, hours, minutes, seconds }) => {
        
        setHour(hours)
        setMinute(minutes)
        setSecond(seconds)
        return (
            <Button variant="warning">{hours}{" "}:{" "}{minutes}{" "}:{" "}{seconds}</Button>
        )
    }
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <span style={{display: "flex"}}><h3 style={{marginTop: "3px", marginRight: "5px"}}>Time Left</h3><Countdown date={endDate} renderer={renderer} /></span>
        </div>
    )
}

export default Timer