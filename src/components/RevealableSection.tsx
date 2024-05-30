import { useState } from "react";
import useAutoScroll from "../hooks/useAutoScroll";
import { FaCaretDown } from "react-icons/fa6";

interface RevealableSectionProps {
  title: string,
  children: JSX.Element | JSX.Element[],
  HeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  contentPadding?: number
}

export default function RevealableSection({title, children, HeadingLevel = 'h2', contentPadding=1}: RevealableSectionProps){
  const [open, setOpen] = useState<boolean>(false)
  const scrollRef = useAutoScroll([open])

  return <>
    <label className="revealable-section-label">
      <HeadingLevel className="flat flex row">{title}
        <button className="revealable-section-button" onClick={() => setOpen(!open)}>
          <FaCaretDown />
        </button>
      </HeadingLevel>
    </label>
    {open? <div className="revealable-section-content" style={{padding: `${contentPadding}em`}} ref={scrollRef}>
      {children}
    </div>: null}
  </>
}