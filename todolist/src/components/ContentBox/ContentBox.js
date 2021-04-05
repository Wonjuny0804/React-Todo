import {contentBox} from './ContentBox.module.scss'

const ContentBox = ({ content }) => {
  return (
    <p className={`${contentBox}`}>
      {content}
    </p>
  )
}
export default ContentBox
