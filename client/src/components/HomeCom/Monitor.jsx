import React from 'react'
import CompCategoryList from './CompCategoryList'
import { monitor } from '../../utils/const'

function Monitor() {
  return (
    <div>
        <div className='py-5'> 
        <CompCategoryList data={monitor}/>
        </div>
    </div>
  )
}

export default Monitor