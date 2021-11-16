import React, {useState} from 'react'
import './Accordion.css';

function Accordion() {

  const data = [
    { id: 0, header: "Header 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"},
    { id: 1, header: "Header 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"},
    { id: 2, header: "Header 3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"}
  ]

  return (
    <div>
      {data.map((d) => <Item key={d.id} data={d} />)}
    </div>
  )
}

export default Accordion

const Item = (props) => {
  const {data} = props;

  const [showBody, setShowBody] = useState(false);

  const toggleBody = () => {
    setShowBody(!showBody);
  }
  
  return (
    <div className="accordion-item">
      <div style={{cursor:'pointer'}} onClick={toggleBody}>
        <Header data={data.header} expanded={showBody}/> 
      </div>
      {showBody && <Body data={data.body} />}
    </div>
  )
}

const Header = (props) => {
  const {data, expanded} = props;

  return (
    <div className="accordion-header">
      <h3>{data}</h3>
      { expanded
        ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
          </svg>
        : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
      }
      
    </div>
  )
}

const Body = (props) => {
  const {data} = props;

  return (
    <div className="accordion-body">
      {data}
    </div>
  )
}
