import { Button } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import Box from './box'
import './assignment2.css'
const Assignment2 = () => {
  const [base, setBase] = useState("USD")
  const [country2, setCountry2] = useState("USD")
  const [data, setData] = useState([])
  const [amount, setAmount] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [show, setShow] = useState(false)
  const onChange = (e) => {
    setBase(() => e.target.value)
  }
  const onNumber = (e) => {
    setAmount(() => e.target.value)
  }
  const onChange2 = (e) => {
    setCountry2(() => e.target.value)
  }
  console.log(amount)

  useEffect(() => {
    let url = `https://v6.exchangerate-api.com/v6/c3baf7d76da514d1bacda01b/latest/${base}`
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data['conversion_rates']))
  }, [base])

  const convert = () => {
    const result = data[country2] * amount
    setAnswer(() => result)
    setShow(() => true)
  }
  return (
    <div className='container'>
      <div className='content'>
        <h1>  Assignment2 (Currency Converter)</h1>
        <Box onChange={onChange} onChange2={onChange2} country2={country2} base={base} onNumber={onNumber} data={data} />
        <Button variant='contained' className='btn-full' onClick={convert}>Convert</Button>
        {show ?
          <p className='result'>{amount}{' '}{base} = {answer}{' '}{country2}</p>
          : null}
      </div>
    </div>

  )
}

export default Assignment2