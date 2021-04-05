import './Box.scss'

const Box = ({ active, children }) => {
  return (
    <div 
      className={`box ${active || "non-active"}`.trim()} 
    >
      {children}
    </div>
  )
}

export default Box
