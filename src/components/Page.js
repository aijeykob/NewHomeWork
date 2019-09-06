import React,{Component} from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import _ from 'lodash'
import ProductInfo from "./ProductInfo";






class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
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
            ],
            selectedProduct:null

        }

    }

    render(){
       const {selectedProduct} = this.state;
        const setSelectedProduct = (id) => {
            this.setState({
                selectedProduct: _.findLast(this.state.products,el => el.id ==id)
            })
        };

        const {products} = this.props;
    return (
         <Navbar bg="dark" expand="lg" variant ="dark">
                <Navbar.Brand href="#home">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        {
                            products.map(el => {
                                return (
                                    <Nav.Link
                                        active={false}
                                        href="#"
                                        onClick={()=>setSelectedProduct(el.id)}
                                        key={el.id}
                                    >
                                        {el.title}
                                    </Nav.Link>
                                )
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

    )
}}


export default Page