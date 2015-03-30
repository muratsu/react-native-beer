
'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

var BeerScreen = React.createClass({
  render: function() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <View style={styles.cardSection}>
            <View style={styles.cardTopSection}>
              <Text style={styles.beerName}>{this.props.beer.name}</Text>
              <Text style={styles.beerBrewery}>{this.props.beer.brewery}</Text>
            </View>
            <View style={styles.cardBeerSection}>
              <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
                <Image
                  source={require('image!generic')}
                  style={styles.beerImage}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'flex-start', flexDirection: 'row', 
                alignSelf: 'center'}}>
                <Image 
                  source={require('image!circle')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}>
                  <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0)', 
                      alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontSize: 20, textAlign:'center'}}>
                      {this.props.beer.alcohol}
                    </Text>
                  </View>
                </Image>
              </View>              
            </View>
            <View style={styles.cardHomeSection}>
              <Text style={styles.beerName}>{this.props.beer.brewery}</Text>
            </View>
            <View style={styles.cardTagSection}>
              <Text style={styles.beerName}>{this.props.beer.tags}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  mainSection: {
    flexDirection: 'row',
  },
  cardSection: {
    flex: 1,
    shadowColor: '#cccccc',
    shadowOffset: {h: 3, w: 3},
    shadowRadius: 5,
  },
  cardTopSection: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
  },
  cardBeerSection: {
    borderColor: '#dddddd',
    borderWidth: 1,
    marginTop: -1,
    flex: 1,
    flexDirection: 'row',
  },
  cardHomeSection: {
    borderColor: '#dddddd',
    borderWidth: 1,
    marginTop: -1,
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  cardTagSection: {
    borderColor: '#dddddd',
    borderWidth: 1,
    marginTop: -1,
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  beerName: {
    flex: 1,
    fontSize: 16,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 2,
    color: 'black',
    fontWeight: 'normal',
    fontFamily: "Helvetica Neue",
  },
  beerBrewery: {
    flex: 1,
    color: '#666666',
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: "Helvetica Neue",
  },
  beerImage: {
    width: 100,
    height: 200,
    // backgroundColor: '#eaeaea',
    resizeMode: 'contain',
  },
  alcoholPercentage: {
    flex: 1,
    justifyContent: 'space-between',
    fontSize: 20,
  },
});

module.exports = BeerScreen;