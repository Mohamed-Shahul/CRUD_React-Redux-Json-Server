import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    const onClick=()=>{
        console.log('Clicked default');
    }

  return (
    <header className='header'>
      {/* <h1 style={{color:'red',backgroundColor:'black'}}>Task Tracker {title}</h1> */}
      {/* <h1 style={headingStyle}>Task Tracker {title}</h1> */}
      <h1>{title}</h1>
      <Button onClick={onClick} color='black' text='Click Me'/>
    </header>
  )
}

//PROBS
Header.defaultProps={
    title:'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

//STYLES
// const headingStyle={
//     color:'red',
//     backgroundColor:'black'
// }










export default Header
