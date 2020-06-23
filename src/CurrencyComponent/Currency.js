import React from 'react'

function Currency({currencyOptions,amount,selectedCurrency,onChangeAmount,onChangeCurrency}) {
    return (
        <div>
            <input className="currency-input-box" type = "number" value={amount}  onChange={onChangeAmount}/>
            
            <select className="currency-select-box" value= {selectedCurrency}   onChange={onChangeCurrency} >
                    {currencyOptions.map(item=>
                        (
                         <option>{item}</option>   
                        ))}

            </select>
        </div>
    )
}

export default Currency
