var Device = function () {

  this.defineProperties({
    name: {type: 'string', required: true},
    udid: {type: 'string', required: true},
    platform: {type: 'string'},
    osVersion: {type: 'string'},
    description: {type: 'string'},
    office: {type: 'string'},
    zone: {type: 'string'},
    user: {type: 'object'},
    checkedOut: {type: 'boolean'},
    checkoutTime: {type: 'datetime'}
  });
};

Device = geddy.model.register('Device', Device);
