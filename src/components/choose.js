import React,{useContext} from 'react'
import Context from '../context'

function Choose(props) {
  const cProps = useContext(Context)
  // console.log(cProps.currenciesArr);
  return(
    <div  className='choose'>
      <div className='choose_buttons left'>
        <button onClick={ props.chooseCur } name='RUB'>RUB</button>
        <button onClick={ props.chooseCur } name='GBP'>GBP</button>
        <button onClick={ props.chooseCur } name='USD'>USD</button>
        <button onClick={ props.chooseCur } name='EUR'>EUR</button>
      </div>
      <div className='choose_buttons right'>
        <button onClick={ props.chooseCur2 } name='RUB'>RUB</button>
        <button onClick={ props.chooseCur2 } name='GBP'>GBP</button>
        <button onClick={ props.chooseCur2 } name='USD'>USD</button>
        <button onClick={ props.chooseCur2 } name='EUR'>EUR</button>
      </div>
      <form onSubmit={props.getRate}>
        {cProps.currenciesArr.map((item,i) => {
          return(
            <input type='text' key={i} name={'cur'+(i+1)} value={item} readOnly></input>
          )
        })
        }
        <input type='text' name='amount' className='amount' defaultValue='1'></input>
        <button className='result_button'>take a rate</button>
      </form>
    </div>
  )
}

export default Choose
