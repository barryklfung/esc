App.DanceTableComponent = Ember.Component.extend({
  tagName: 'table',

  spacer: function() {
    var registrants = this.get('table.registrants');
    var count = 10;
    if (!Ember.isNone(registrants)) {
      count -= registrants.get('length');
    }

    var spacer = [];
    for (var i = 0; i < count; i++) {
      spacer.push('');
    }

    return spacer;
  }.property('table.registrants.@each'),

  click: function() {
    var registrants = this.get('table.registrants');
    var registrant = this.get('registrant');

    if (!registrants.contains(registrant) && registrants.get('length') < 10) {
      this.sendAction('action', this.get('table.id'));
    }
    return false;
  }
});
