import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('http://ipinfo.io').then(data => {
      console.log(data)
      Ember.$.getJSON('http://api.openweathermap.org/data/2.5/weather?zip=' + data.postal + '&APPID=a62cd1cab307b87f29523ee6112488f5').then(data => {
        console.log(data)
      })
    })
    // return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=a62cd1cab307b87f29523ee6112488f5').then(data => {
    //   console.log(data)
    // })
  }
});
