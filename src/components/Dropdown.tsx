import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { FaCaretDown } from "react-icons/fa6";
import '../styles/dropdown.css'

interface DropdownProps {
  label: string,
  items: {contents: JSX.Element | JSX.Element[], callback: () => void}[]
}

export default function Dropdown({label, items}: DropdownProps){
  const [open, setOpen] = useState<boolean>(false)
  const ref = useOutsideClick(() => setOpen(false))

  return (
    <div className="dropdown-root" ref={ref}>
        <button className="dropdown-button"
        onClick={() => setOpen(!open)}>
          {label}
          <div style={{padding: '0', marginInline: 'auto 0'}}>
            <FaCaretDown  />
          </div>
        </button>
        {open?
        <div className='dropdown-body'>
          {
            items.map((item, index) =>
              <button key={index} className="dropdown-item"
              onClick={item.callback}>
                {item.contents}
              </button>
            )
          }
        </div>
        : null}
    </div>
  )
}