import React from 'react';

function MessageInstructions() {
  return (
    <div>
      <p>
        The Message component contains an anchor element and a paragraph below the anchor. 
        Rendering of the paragraph should be toggled by clicking on the anchor element using 
        the following logic:
      </p>
      <ul>
        <li>at the start, the paragraph should not be rendered</li>
        <li>after a click, the paragraph should be rendered</li>
        <li>after another click, the paragraph should not be rendered</li>
      </ul>
    </div>
  )
}

export default MessageInstructions
