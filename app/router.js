import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', { path: ':user_id' });
  this.route('contact');
  this.route('post-a-move', { path: '/post-a-move/:user_id' });
  this.route('sign-in');
  this.route('open-moves');
  this.route('move-detail', {path: '/move-detail/:move_id'});
  this.route('user-profile');
  this.route('movers-list');
  this.route('mover-sign-up');
});

export default Router;
