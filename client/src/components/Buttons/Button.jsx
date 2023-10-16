import React from 'react'

function Button({children,...props}) {
  return (
    <div>
        <button className={props.className}>
            {children}
        </button>
    </div>
  )
}

export default Button