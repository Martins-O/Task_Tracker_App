// function Button(){
//   return <button className='btn'>Add</button>
// }
import PropTypes  from "react"


const Button = ({ color, text, onClick }) => {
  return(
    <button onClick={onClick} style={{backgroundColor: color}}
    className='btn'>
      {text}
    </button>
  )
}

Button.defauilProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
