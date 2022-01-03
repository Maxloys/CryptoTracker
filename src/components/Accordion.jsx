import React, { useState, useRef } from "react"
import {FaChevronRight} from "react-icons/fa"
import './Accordion.css'

function Accordion(props) {

  const [Active, setActive] = useState("")
  const [Height, setHeight] = useState("0px")
  const [Rotate, setRotate] = useState("accordion__icon")

  const content = useRef(null)

  function toggleAccordion() {
    setActive(Active === "" ? "active" : "");
    setHeight(
      Active === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
    setRotate(
      Active === "active" ? "accordion__icon" : "accordion__icon rotate"
    )
  }

  return (
    <div className="accordion__section" style={{marginBottom:'10px'}}>
      <button className={`accordion ${Active}`} onClick={toggleAccordion}>
      <img src={props.iconUrl} className='accordion__image' alt='icon' />
        <p className="accordion__title">{props.title}</p>
        <FaChevronRight className={`${Rotate}`} width={10} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${Height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
