import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '../styles/reviewContent.scss';
import { withRouter } from 'react-router-dom';


class ReviewContent extends Component {
  constructor(props) {
    super(props);
      this.state = {
        items: []
      }
  }

  componentDidMount () {
    const { id } = this.props.match.params;

    fetch(`https://reviews.fromrachel.com/api/reviews?shopify_product_id=${id}&limit=100&page=1`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.models
          });
        },
        (error) => {
          console.log(error);
        }
      )
  }

  render() {
    return (
      <div className="reviewContent">
        <Button variant="outlined" onClick={() => {this.props.history.push('/');}}>
          &larr; Back
        </Button>
        { this.state.items.length === 0 ? 'Sorry... there\'s no review for this product yet' : ''}
        <div>
          {this.state.items.map((item, i) => (
            <Paper className="reviewContent__paper">
              <p className="reviewContent__paper--name">{item.name}</p>
              <p className="reviewContent__paper--rate">Rating: {item.rating}</p>
              <p className="reviewContent__paper--review">
                {item.body}
              </p>
            </Paper>
          ))}
        </div>
      </div>
    );
  }
}
export default withRouter(ReviewContent);
