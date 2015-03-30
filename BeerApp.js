'use strict';

var React = require('react-native');
var {
	AppRegistry,
	NavigatorIOS,
	StyleSheet
} = React;

var SearchScreen = require('./SearchScreen');

var BeerApp = React.createClass({
	render: function() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Belgian Beer Explorer',
					component: SearchScreen
				}}
			/>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow'
	}
});

AppRegistry.registerComponent('BeerApp', ()=> BeerApp);

module.exports = BeerApp;