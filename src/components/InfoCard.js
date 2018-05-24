import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './InfoCard.scss'

const imageSize = 48

class InfoCard extends Component {

    render() {
        const {title, subtitle, image, postText} = this.props

        const postDate = new Date(Date.now()).toLocaleString();

        return (
            <div className="cardContainer">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator imageStyle" src={image} />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{title}</span>
                    <p>{postDate}</p>
                    <br />
                    {
                      // TODO: Add text omission for long posts on front of card
                    }
                    <span>{subtitle}</span>
                    <br />
                    <br />
                    <p>Click the image to read more.</p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                    <br />
                    <p>{postText}</p>
                  </div>
                </div>
            </div>
        )
    }
}

export default InfoCard
