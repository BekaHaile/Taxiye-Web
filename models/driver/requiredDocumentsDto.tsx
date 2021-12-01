const requiredDocumentsDto = (access_token) => {
  return {
    access_token: `${access_token}`,
    login_documents: 3,
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    app_version: 6010,
    login_type: 1,
    branding_image: 0,
    device_type: 0,
    task_type: 1,
    locale: "en",
  };
};

export default requiredDocumentsDto;
