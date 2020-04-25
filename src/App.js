import React, {useState, useEffect} from 'react'
import Choose from './components/choose'
import ShowRate from './components/showRate'
import './App.css';
import Context from './context'
function App() {
  const API_KEY = '4430c50d70e4604d1f48'
  const [cur1, setCur1] = useState('USD')
  const [cur2, setCur2] = useState('EUR')
  const [result, setResult] = useState(0)
  let currenciesArr = [cur1, cur2]

  async function getRate(e) {
    e.preventDefault()
    setCur1(e.target.cur1.value)
    setCur2(e.target.cur2.value)
    let amount = e.target.amount.value
    const api_url = await fetch(`https://free.currconv.com/api/v7/convert?q=${cur1}_${cur2}&compact=ultra&apiKey=${API_KEY}`)
    const data = await api_url.json()
    await setResult(convert(amount, data))
    await console.log(result)

  }

  function convert(amount, data) {
    for (let prop in data) {
      return (amount * data[prop]).toFixed(2)
    }
  }

  function chooseCur(e) {
    e.preventDefault()
    setCur1(e.target.name)
  }
  function chooseCur2(e) {
    e.preventDefault()
    setCur2(e.target.name)
  }

  // useEffect(() => {
  // console.log('yes');
  // },[cur1])
  return (
    <Context.Provider value={{currenciesArr}}>
    <div className='block'>
      <Choose getRate={getRate} chooseCur={chooseCur} chooseCur2={chooseCur2}/>
      <ShowRate currencies={currenciesArr} result={result}/>
    </div>
  </Context.Provider>
)
}

export default App;
