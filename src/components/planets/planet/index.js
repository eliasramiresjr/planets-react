import React, { useEffect, useState } from "react"
import GrayImg from "../../shared/gray_img"
import DescriptionWithLink from "../../shared/description_with_links"

import { Link } from "react-router-dom"

const Planet = (props) => {
    let title
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return (
        <div>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescriptionWithLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
        </div>
    )
}

export default Planet

/*
class Planet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            satellites: []
        }
    }
    componentDidMount() {
        getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data["satellites"]
            }))
        })
    }
    render() {
        let title
        if (this.props.title_with_underline)
            title = <h4><u>{this.props.name}</u></h4>
        else
            title = <h4>{this.props.name}</h4>

        return (
            <div>
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link} />
                <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map((satellite, index) =>
                        <li key={index}>{satellite.name}</li>
                    )}
                </ul>
                <hr />
            </div>


        )
    }
}
*/