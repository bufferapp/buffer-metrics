/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.metrics.Response', null, global);
goog.exportSymbol('proto.metrics.UserAgent', null, global);
goog.exportSymbol('proto.metrics.Utm', null, global);
goog.exportSymbol('proto.metrics.Visit', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.metrics.Visit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.metrics.Visit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.metrics.Visit.displayName = 'proto.metrics.Visit';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.metrics.Visit.prototype.toObject = function(opt_includeInstance) {
  return proto.metrics.Visit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.metrics.Visit} msg The msg instance to transform.
 * @return {!Object}
 */
proto.metrics.Visit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 4, ""),
    utm: (f = msg.getUtm()) && proto.metrics.Utm.toObject(includeInstance, f),
    useragent: (f = msg.getUseragent()) && proto.metrics.UserAgent.toObject(includeInstance, f),
    visitorId: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.metrics.Visit}
 */
proto.metrics.Visit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.metrics.Visit;
  return proto.metrics.Visit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.metrics.Visit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.metrics.Visit}
 */
proto.metrics.Visit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 5:
      var value = new proto.metrics.Utm;
      reader.readMessage(value,proto.metrics.Utm.deserializeBinaryFromReader);
      msg.setUtm(value);
      break;
    case 6:
      var value = new proto.metrics.UserAgent;
      reader.readMessage(value,proto.metrics.UserAgent.deserializeBinaryFromReader);
      msg.setUseragent(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisitorId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.metrics.Visit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.metrics.Visit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.metrics.Visit} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.metrics.Visit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUtm();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.metrics.Utm.serializeBinaryToWriter
    );
  }
  f = message.getUseragent();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.metrics.UserAgent.serializeBinaryToWriter
    );
  }
  f = message.getVisitorId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.metrics.Visit.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.metrics.Visit.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string uri = 3;
 * @return {string}
 */
proto.metrics.Visit.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.metrics.Visit.prototype.setUri = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string ip = 4;
 * @return {string}
 */
proto.metrics.Visit.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.metrics.Visit.prototype.setIp = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional Utm utm = 5;
 * @return {?proto.metrics.Utm}
 */
proto.metrics.Visit.prototype.getUtm = function() {
  return /** @type{?proto.metrics.Utm} */ (
    jspb.Message.getWrapperField(this, proto.metrics.Utm, 5));
};


/** @param {?proto.metrics.Utm|undefined} value */
proto.metrics.Visit.prototype.setUtm = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.metrics.Visit.prototype.clearUtm = function() {
  this.setUtm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.metrics.Visit.prototype.hasUtm = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UserAgent useragent = 6;
 * @return {?proto.metrics.UserAgent}
 */
proto.metrics.Visit.prototype.getUseragent = function() {
  return /** @type{?proto.metrics.UserAgent} */ (
    jspb.Message.getWrapperField(this, proto.metrics.UserAgent, 6));
};


/** @param {?proto.metrics.UserAgent|undefined} value */
proto.metrics.Visit.prototype.setUseragent = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.metrics.Visit.prototype.clearUseragent = function() {
  this.setUseragent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.metrics.Visit.prototype.hasUseragent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string visitor_id = 7;
 * @return {string}
 */
proto.metrics.Visit.prototype.getVisitorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.metrics.Visit.prototype.setVisitorId = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.metrics.Utm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.metrics.Utm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.metrics.Utm.displayName = 'proto.metrics.Utm';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.metrics.Utm.prototype.toObject = function(opt_includeInstance) {
  return proto.metrics.Utm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.metrics.Utm} msg The msg instance to transform.
 * @return {!Object}
 */
proto.metrics.Utm.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: jspb.Message.getFieldWithDefault(msg, 1, ""),
    medium: jspb.Message.getFieldWithDefault(msg, 2, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.metrics.Utm}
 */
proto.metrics.Utm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.metrics.Utm;
  return proto.metrics.Utm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.metrics.Utm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.metrics.Utm}
 */
proto.metrics.Utm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMedium(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.metrics.Utm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.metrics.Utm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.metrics.Utm} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.metrics.Utm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMedium();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string source = 1;
 * @return {string}
 */
proto.metrics.Utm.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.metrics.Utm.prototype.setSource = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string medium = 2;
 * @return {string}
 */
proto.metrics.Utm.prototype.getMedium = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.metrics.Utm.prototype.setMedium = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string campaign = 3;
 * @return {string}
 */
proto.metrics.Utm.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.metrics.Utm.prototype.setCampaign = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.metrics.Utm.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.metrics.Utm.prototype.setContent = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.metrics.UserAgent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.metrics.UserAgent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.metrics.UserAgent.displayName = 'proto.metrics.UserAgent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.metrics.UserAgent.prototype.toObject = function(opt_includeInstance) {
  return proto.metrics.UserAgent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.metrics.UserAgent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.metrics.UserAgent.toObject = function(includeInstance, msg) {
  var f, obj = {
    browser: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.metrics.UserAgent}
 */
proto.metrics.UserAgent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.metrics.UserAgent;
  return proto.metrics.UserAgent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.metrics.UserAgent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.metrics.UserAgent}
 */
proto.metrics.UserAgent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.metrics.UserAgent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.metrics.UserAgent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.metrics.UserAgent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.metrics.UserAgent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrowser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string browser = 1;
 * @return {string}
 */
proto.metrics.UserAgent.prototype.getBrowser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.metrics.UserAgent.prototype.setBrowser = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.metrics.UserAgent.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.metrics.UserAgent.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.metrics.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.metrics.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.metrics.Response.displayName = 'proto.metrics.Response';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.metrics.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.metrics.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.metrics.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.metrics.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.metrics.Response}
 */
proto.metrics.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.metrics.Response;
  return proto.metrics.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.metrics.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.metrics.Response}
 */
proto.metrics.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.metrics.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.metrics.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.metrics.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.metrics.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.metrics.Response.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.metrics.Response.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.metrics);