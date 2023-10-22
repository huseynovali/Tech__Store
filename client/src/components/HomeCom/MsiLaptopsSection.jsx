import React from 'react'
import CompCategoryList from './CompCategoryList'
import { msiLaptops } from '../../utils/const'

function MsiLaptopsSection() {
  return (
    <div className='py-5'>
        <CompCategoryList data={msiLaptops}/>
    </div>
  )
}

export default MsiLaptopsSection