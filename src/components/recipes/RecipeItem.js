import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Ingredients from "./IngredientList";

function RecipeItem({ id, title, thumbnail, ingredients }) {   
	return (
            <Card border="primary" key={id}>
                <Card.Body>
                    <Row>
                    <Col xs={6} md={4} >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Ingredients in this recipe:<br></br>
                        <Ingredients ingredients={ingredients}></Ingredients>
                        </Card.Text>
                    </Col>
                    <Col xs={6} md={6}></Col>
                    <Col xs={6} md={2}>
                        <br></br>
                        <Image src={thumbnail} roundedCircle />
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
	);
}

RecipeItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;