/* eslint-disable react/prop-types */





export default function  Square(props) {
  return (
    <div className='square' onClick={props.Click} >
        <h5>{props.value}</h5>
    </div>
  )
}
