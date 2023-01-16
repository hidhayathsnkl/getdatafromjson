import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 


const Client = () => {
    return (
        <Container className='mt-4'> 
            <Row> 
                <div className="container clientdiv">
                    <div class="title">  OUR CLIENTS </div>
                    <p class="h2 text-center"> OUR PRESTIGIOUS CLIENTS</p>                                                    
                </div>                            
            </Row>    
            <Row> 
                <p class="lead text-center"> We have been fortunate to work with some of the leading clients all over the KINGDOM OF SAUDI ARABIA AND BAHRAIN. While this is not an exhaustive list, here are some of our happy clients. For a comprehensive list please feel free to contact us</p>                                                  
            </Row>
            <Row className='pt-3 gx-3'>
                <ClientName text = "Saudi American Glass Company Ltd"/>
                <ClientName text = "Panaroma Shopping Complex"/>
                <ClientName text = "Olaya Tower"/>
                <ClientName text = "Kingdom Tower"/>
            </Row>            
        </Container>
    )
}

const ClientName = (props) => {
    return (
        <Col className = "justify-content-center p-3 align-items-center bg-light border border-rounded d-flex" md={3} xs={6}>
            <p class="text-center"> {props.text} </p>
        </Col>   
        
    )

}

export default Client;
