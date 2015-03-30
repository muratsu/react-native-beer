'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var BeerCell = React.createClass({
  render: function() {
    var alcoholLevel = this.props.beer.alcohol;
    return (
      <View>
        <TouchableHighlight onPress={this.props.onSelect}>
          <View style={styles.row}>
            <View style={styles.textContainer}>
              <View style={{flex: 1}}>
                <Text style={styles.beerName} numberOfLines={1}>
                  {this.props.beer.name}
                </Text>
                <Text style={styles.beerStyle} numberOfLines={1}>
                  {this.props.beer.tags}
                </Text>
              </View>
              <View style={{flex: 0, justifyContent: 'flex-end'}}>
                <Image 
                  source={require('image!circle')}
                  style={{resizeMode: 'contain', width: 40, height: 40}}>
                  <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white', textAlign:'center'}}>
                      {this.props.beer.alcohol}
                    </Text>
                  </View>
                </Image>
              </View>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.cellBorder} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  beerName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  beerStyle: {
    color: '#999999',
    fontSize: 12,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 93,
    marginRight: 10,
    width: 60,
  },
  cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  },
});

module.exports = BeerCell;