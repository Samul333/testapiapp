import React,{useState,useEffect} from 'react'
import Currency from './Currency'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function CurrencyIndex() {
    
    const[fromCurrency,setFromCurrency]= useState()
    const[toCurrency,setToCurrency]= useState()
    const[exchangeRate,setExchangeRate]= useState()
    const[currencyOptions,setCurrencyOptions]= useState([])
    const[amount,setAmount] = useState(1)
    const[amountInFromCurrency,setAmountInFromCurrency] = useState(true)

    let fromAmount,toAmount

    if(amountInFromCurrency){
        fromAmount = amount
        toAmount = amount * exchangeRate
    }
    else{
        toAmount= amount
        fromAmount = amount / exchangeRate
    }

    useEffect(()=>{
        fetch(BASE_URL)
        .then(res=> res.json())
        .then(data=>{
            const firstCurrency = Object.keys(data.rates)[0]
            setFromCurrency(data.base)
            setExchangeRate(data.rates[firstCurrency])
            setToCurrency(firstCurrency)
            setCurrencyOptions([data.base,...Object.keys(data.rates)])
        })

    },[])

    useEffect(()=>{

        if(fromCurrency===toCurrency){
            setExchangeRate(1)
            return
        }

        if(fromCurrency!=null && toCurrency!=null){
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(res=>res.json())
    .then(data=> setExchangeRate(data.rates[toCurrency]))
        }


    },[fromCurrency,toCurrency])




    const handleFromAmount=e=>{

        setAmount(e.target.value)
        setAmountInFromCurrency(true)

    }
    const handleToAmount=e=>{
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }
    console.log(currencyOptions)
    return (
        <div className="currency-wrapper">
            <div className="currency-box">
                <h1> Currency Converter </h1>
                    <Currency
                    currencyOptions={currencyOptions}
                    amount = {fromAmount}
                   onChangeCurrency={e=>setFromCurrency(e.target.value)}
                   onChangeAmount={handleFromAmount}
                   selectedCurrency ={fromCurrency}
                  
                    />
                      <h3>  = </h3>
                    <Currency
                    currencyOptions={currencyOptions}
                    amount={toAmount}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={e=>setToCurrency(e.target.value)}
                   onChangeAmount={handleToAmount}

                    
                    />
                
            </div>
            
        </div>
    )
}

export default CurrencyIndex
