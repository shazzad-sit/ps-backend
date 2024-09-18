const { model, Schema } = require("mongoose");
const paginate = require('mongoose-paginate-v2');


const schema = new Schema({
  title: { type: String, required:true },
  thumbnail: { type: String, required:true },
  content: {type:String, required: true },

}, { timestamps: true });
schema.plugin(paginate);
schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  delete obj.updatedAt;

  return JSON.parse(JSON.stringify(obj));
};

module.exports= model('Blog', schema);