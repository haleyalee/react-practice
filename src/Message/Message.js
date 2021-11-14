import React, {useState} from 'react';

const Message = () => {
  
  const [show, setShow] = useState(false)
  
  return(
    <div>
      <a href="message" onClick={(e) => {e.preventDefault(); setShow(!show)}}>Want to buy a new car?</a>
      { show && <p>Call +11 22 33 44 now!</p> }
    </div>
  )
}

export default Message;