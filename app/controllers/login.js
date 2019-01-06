import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      var authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
        .catch((reason)=>{
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
