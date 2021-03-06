'use strict';
const { NullableString, RequiredString } = require('../util/schema')
const Schema = require('mongoose').Schema;

const SchemaDefine = {
  userid: RequiredString(64),
  name: RequiredString(64),
  gender: NullableString(64),
  mobile: NullableString(64),
  telephone: NullableString(64),
  email: NullableString(64),
  attrs: Object,
  department: [ Number ],
  order: [ Number ],
  position: NullableString(64),
  isleader: Number,
  enable: Number,
  passwd: Object,
  tenant: RequiredString(64),
};

module.exports = app => {
  const { mongoose } = app;
  return mongoose.model('User', new mongoose.Schema(SchemaDefine), 'naf_user_info');
};
