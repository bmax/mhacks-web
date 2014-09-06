import Authenticator from '../authenticators/authenticator-custom';
import Authorizer from '../authorizers/authorizer-custom';

export default {
 name: 'authentication',
 before: 'simple-auth',
 initialize: function(container, application) {
    container.register('authenticator:custom', Authenticator);
    container.register('authorizer:custom', Authorizer);
  }
};