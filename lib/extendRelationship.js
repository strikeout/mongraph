// Generated by CoffeeScript 1.6.2
var Relationship, processtools, _;

_ = require('underscore');

processtools = require('./processtools');

Relationship = {
  toObject: function() {
    var _ref;

    return {
      from: this.from || null,
      to: this.to || null,
      data: (_ref = this._data) != null ? _ref.data : void 0,
      id: this.id,
      getParent: function() {
        return this;
      }
    };
  }
};

exports.extend = function(relationshipObject) {
  if (typeof relationshipObject !== 'object') {
    return relationshipObject;
  }
  return _.extend(relationshipObject, Relationship);
};