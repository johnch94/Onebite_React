import "./App.css";
import { useState } from "react";

const Rate = 1300;

function CurrenyInput ({currency, value, onChange}) {
  return (
    <div>
      <label>{currency} : </label>
      <input 
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  )
}

function App() {
  const [exchange, setExchange] = useState({
    krw : 0,
    usd : 0
  })

  const onChangeExchange = (currency, value) => {
    if(currency === "krw") {
      setExchange({
        krw : value,
        usd : value / Rate
      })
    }
    else {
        setExchange({
          krw : value * Rate,
          usd : value
        })
    }
  }

  return (
    <>
      <CurrenyInput 
        currency  = {"krw"}
        value     = {exchange.krw}
        onChange  = {onChangeExchange}
      />
      <CurrenyInput 
        currency  = {"usd"}
        value     = {exchange.usd}
        onChange  = {onChangeExchange}
      />
    </>
  )
}

export default App
