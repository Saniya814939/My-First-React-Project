
import './App.css';
import Area from './Components/Area';

import Category from './Components/Category';

import ShopName from './Components/ShopName';
import Date from './Components/Date'
import Operations from './Components/Operations';



function App() {
  return (
    <div  class="resp"style={{textAlign: 'center' , border: '5px solid black' , marginTop:'30px' , marginLeft:'150px' , marginRight:'150px' , paddingBottom:'30px'}}>
     <h1>Shop</h1>
     
     <ShopName></ShopName>
     <Area></Area>
     <Category></Category>
     <Date></Date>
     <Operations></Operations>
     
     
    </div>
  );
}

export default App;
