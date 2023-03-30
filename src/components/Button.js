const Button = ({color,text,onClick}) => {

// const onClick=()=>{
//     console.log('Clicked');
// }

  return (
    <div>
      <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
      
    </div>
  )
}

export default Button
