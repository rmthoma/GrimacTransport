import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './InfoCard.scss'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const imageSize = 48

class InfoCard extends Component {

    render() {
        const {title, subtitle, image, overlayTitle, overlaySub} = this.props
        let showOverlay = "block"

        if(overlayTitle == "" || overlayTitle == undefined) showOverlay = "none"

        const styles = {
            display: showOverlay
        }

        return (
            <div className="cardContainer">
                <Card className="card">
                    <CardMedia overlayContainerStyle={styles} overlay={<CardTitle title={overlayTitle} subtitle={overlaySub} />}>
                    <img className="imageContainer" src={image} alt=""/>
                    </CardMedia>
                    <CardTitle title={title} subtitle={new Date(Date.now()).toLocaleString()} />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default InfoCard
