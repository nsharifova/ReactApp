import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Footer = () => {
  const myData=useLanguage()
  console.log(myData);
  return (
 
  <div>Footer</div>
  )
}

export default Footer