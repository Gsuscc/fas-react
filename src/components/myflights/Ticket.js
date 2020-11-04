import React from 'react'
import Grow from '@material-ui/core/Grow';
import './Ticket.css'

export default function Ticket(props) {
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    console.log(props.delay)
    setTimeout(setToReady, props.delay)
  }, [props.delay])

  const setToReady = () => {
    console.log("ott")
    setIsReady(true)
  }

  return (
    <React.Fragment>
      {isReady && 
        <Grow in={isReady}>
          <div className="ticket-container">
            {props.delay}
            {props.ticket.id}
          </div>
        </Grow>
      }
    </React.Fragment>
  )
}
