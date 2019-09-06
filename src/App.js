import React, {Fragment} from 'react';
import Page from "./components/Page.js";
const ApiUrl = 'http://smktesting.herokuapp.com/'

const products = [
    {
        "id": 1,
        "title": "product1",
        "img": "img1.png",
        "text": "lorem ipsum 1"
    },
    {
        "id": 2,
        "title": "product2",
        "img": "img2.png",
        "text": "lorem ipsum 2"
    }
]

const App = () => {
  return (
      <Fragment>
      <Page products ={products} ApiUrl={ApiUrl}/>

      <div>Product review</div>
      </Fragment>
  )
}
export default App;
