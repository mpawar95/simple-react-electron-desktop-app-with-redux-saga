import React, { Component } from 'react';
import './App.css';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: null
		};
	}
	componentDidMount() {
		this.props.myApiWatcher(
			{},
			(response) => {
				this.setState({
					posts: response.data.data.children
				});
			},
			(error) => {
				console.log('error :', error);
			}
		);
	}

	render() {
		return (
			<div className="App">
				<div>
					<span>Main Page</span>
				</div>
				{this.state.posts && (
					<ul className="list-group list-group-flush">
						{this.state.posts.map((items) => (
							<li
								key={items.data.id}
								className="list-group-item flex-container"
								onClick={() => {
									this.props.history.push('/Image', { items: items });
								}}
							>
								<img src={items.data.thumbnail} alt="thumb" className="thumbnail" />
								<div>{items.data.title}</div>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}
