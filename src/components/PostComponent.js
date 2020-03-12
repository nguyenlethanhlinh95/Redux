import React, { Component } from 'react'

export default class PostComponent extends Component {
    render() {
        return (
            <div>
                 <h3 className="title">{this.props.title}</h3>
                 <p>{this.props.id}</p>
            </div>
        )
    }
}
