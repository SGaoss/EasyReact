import React,{Fragment} from 'react';

let Person = {
  height: 168,
  weight:110,
  cost:16,
  type:'哈皮'
}
function App() {
  return (
   <Fragment>
     <div className="box">
       <h1>此恋之洁，无以复加</h1>
     </div>
    <div className="person">
      <h2>{Person.cost}</h2>
    </div>
    </Fragment>
  )
}

export default App;
