import automationSchema from "./automation.Schema.js";

export const insertData = (obj) => {
  return automationSchema(obj).save();
};

export const getData = () => {
  return automationSchema.find();
};

export const getDataById = (filter) => {
  return automationSchema.findById(filter);
};

export const deleteData = (filter) => {
  return automationSchema.findOneAndDelete(filter);
};

export const updateData = (filter, obj) => {
  return automationSchema.findByIdAndUpdate(filter, obj, { new: true });
};
