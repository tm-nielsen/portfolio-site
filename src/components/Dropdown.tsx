import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { FaCaretDown } from "react-icons/fa6";
import '../styles/dropdown.css'

interface DropdownProps {
  label: string,
  items: DropdownItemProps[]
}
export interface DropdownItemProps {
  contents: JSX.Element | JSX.Element[],
  callback: () => void,
  closeOnClick?: boolean
}

export default function Dropdown({label, items}: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false)
  const ref = useOutsideClick(() => setOpen(false))

  function wrapCallback(itemCallback: () => void, closeOnClick = false) {
    if (closeOnClick) {
      return () => {
        itemCallback()
        setOpen(false)
      }
    }
    return itemCallback
  }

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
              onClick={wrapCallback(item.callback, item.closeOnClick)}>
                {item.contents}
              </button>
            )
          }
        </div>
        : null}
    </div>
  )
}