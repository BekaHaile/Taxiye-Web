const fileUploadDto = (file, index, doc_type_num, access_token) => {
  var form = new FormData();
  form.append("image", file);
  form.append("img_position", index);
  form.append("doc_type_num", doc_type_num);
  form.append("access_token", access_token);
  return form;
};

export default fileUploadDto;
