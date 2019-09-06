import React, {Fragment} from 'react';
import Image from 'react-bootstrap/Image'

// [
//     {
//         "id": 1,
//         "title": "product1",
//         "img": "img1.png",
//         "text": "lorem ipsum 1"
//     },
//     {
//         "id": 2,
//         "title": "product2",
//         "img": "img2.png",
//         "text": "lorem ipsum 2"
//     }
// ]

const ProductInfo = ({products,ApiUrl}) => {
    return (
        <Fragment>
        <h2>{products.title}</h2>
        <Image src={ApiUrl+`static/`+"img1.png"} fluid />
            <h3>Product Description</h3>
            <p>{products.text}</p>
        </Fragment>
    )

}

export  default  ProductInfo;