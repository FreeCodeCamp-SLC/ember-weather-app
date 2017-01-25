import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('http://ipinfo.io').then(data => {
      console.log(data)
      return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/weather?zip=' + data.postal + '&units=imperial&APPID=a62cd1cab307b87f29523ee6112488f5').then(data => {
        console.log(data)
        return { city: data.name, icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png', description: data.weather[0].main, temp: data.main.temp}
      })
    })
  }
});
