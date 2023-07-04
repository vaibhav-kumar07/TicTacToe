/* eslint-disable react/prop-types */





export default function  Square(props) {
  
  console.log("in square component ",props.value);
  return (
    <div className='square' onClick={props.Click} >
        <h1>{props.value}</h1>
    </div>
  )
}
