import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../styles/card.scss';

const ProductCard = props => (
  <Card
    className="product-card"
    onClick={() => props.toReview(props.id)}
  >
    <div className="product-card__image--outer">
      <CardMedia
        className="product-card__image--inner"
        image={props.image}
      />
    </div>
    <CardContent
      className="product-card__content"
    >
      <Typography gutterBottom variant="h6" component="h2">
        {props.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.type}
      </Typography>
    </CardContent>
  </Card>
);

export default ProductCard;
