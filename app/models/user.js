var User = function () {

  this.defineProperties({
    email: {type: 'string', required: true},
    firstName: {type: 'string'},
    lastName: {type: 'string'}
  });
};

User = geddy.model.register('User', User);
