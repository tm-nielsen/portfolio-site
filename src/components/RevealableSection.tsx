import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

interface RevealableSectionProps {
  title: string,
  children: JSX.Element | JSX.Element[]
}

export default function RevealableSection({title, children}: RevealableSectionProps){
  const [open, setOpen] = useState<boolean>(false)

  return <>
    <div className="row">
      <label className="revealable-section-label">
        <h2 className="flat">{title}</h2>
        <button className="revealable-section-button" onClick={() => setOpen(!open)}>
          <FaCaretDown />
        </button>
      </label>
    </div>
    {open? <div className="revealable-section-content">
      {children}
    </div>: null}
  </>
}