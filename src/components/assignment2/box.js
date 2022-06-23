import React from 'react'

const Box = (props) => {
    return (
        <div className='convert-to'>
            <input type="number" onChange={props.onNumber}>{props.amount}</input>
            <div className='selection-cont'>
                <select name="base" value={props.base} onChange={props.onChange}>
                    {Object.keys(props.data).map((country, index) => {
                        return (
                            <option key={index} value={country}>{country}</option>
                        )
                    })}
                </select>
                to
                <select name="country2" value={props.country2} onChange={props.onChange2}>
                    {Object.keys(props.data).map((country, index) => {
                        return (
                            <option key={index} value={country}>{country}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Box