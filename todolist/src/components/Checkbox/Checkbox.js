import { bool, string, func } from 'prop-types'
import { 
  checkbox,
  checked as checkedClass,
} from './Checkbox.module.scss'

const Checkbox = ({
  id,
  checked,
  onChange,
  ...restProps  
}) => {
  return (
  <>
    <label
      htmlFor={id} 
      className={`
      ${checkbox} 
      ${checked ? checkedClass : null}
      `.trim()}
      >
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      {...restProps}
    />{' '}
    </label>
  </>
  )  
}

Checkbox.propTypes = {
  checked: bool,
  className: string,
  onChange: func,
}

Checkbox.defaultProps ={
  checked: false
}

export default Checkbox
