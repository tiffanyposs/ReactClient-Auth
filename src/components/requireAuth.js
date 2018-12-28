import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
	class ComposedComponent extends Component {

		// our component just got rendered
		componentDidMount() {
			this.shouldNavigateAway();
		}

		// our component just got updated
		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway() {
			// locks out navigation to this component if not logged in
			if (!this.props.auth) {
				this.props.history.push('/');
			}
		}

		render() {
			return <ChildComponent {...this.props} />
		}
	}

	function mapStateToProps(state) {
		return { auth: state.auth.authenticated }
	}

	return connect(mapStateToProps, null)(ComposedComponent);
};

// How to use

// import requireAruth from 'components/requireAuth';
//
// class CommentBox {
//
// }
//
// export default requireAuth(CommentBox);


// Boilerplate example

// export default (ChildComponent) => {
// 	class ComposedComponent extends Component {
// 		render() {
// 			return <ChildComponent {...this.props} />
// 		}
// 	}
// 	return ComposedComponent;
// };
