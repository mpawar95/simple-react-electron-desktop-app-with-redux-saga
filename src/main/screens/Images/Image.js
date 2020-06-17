import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './image.css';

export default class Image extends Component {
	render() {
		return (
			<div className="card">
				<img
					className="card-img-top"
					style={{ widows: '100%', height: '100%' }}
					src={this.props.history.location.state.items.data.thumbnail}
					alt={this.props.history.location.state.items.data.post_hint}
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">{this.props.history.location.state.items.data.title}</p>
				</div>
				<div class="card-body">
					<div>
						<Link to="/">Back</Link>
					</div>
					<div>
						<a>Move Forward</a>
					</div>
				</div>
			</div>
		);
	}
}
