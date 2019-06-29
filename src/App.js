import React,{Fragment} from 'react';

let Person = {
  height: 168,
  weight:110,
  cost:16,
  type:'哈皮'
}
const newHtml = `<h2>回首羡仙</h2>`
const arr = ['🍎', '🍌', '🍇', '🍉'];
function App() {
  return (
   <Fragment>
     <div className="box">
       <h1>此恋之洁，无以复加</h1>
     </div>
    <div className="person">
      <h2>{Person.cost}</h2>
    </div>
    <div className="fruits">
      {arr.map(item=>{
        return <h1 key={item}>{item}</h1>
      })}
      <div className="wife" style={{color:'blue',backgroundColor:'#000'}}>
        <h3>银冰龙人·菲琳</h3>
      </div>
      <div dangerouslySetInnerHTML={{__html:newHtml}}>

      </div>
    </div>
    </Fragment>
  )
}

export default App;
