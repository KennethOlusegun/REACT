import React from 'react'

interface Props {
    name:string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>My second component</p>
        <p>His name is {props.name}</p>
    </div>
  )
}

export default SecondComponent