import React from 'react'

function Button({children,...props}) {
  return (
    <div>
        <button className={props.className} {...props}>
            {children}
        </button>
    </div>
  )
}

export default Button