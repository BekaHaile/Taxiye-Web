import { message } from "antd";

const defaultDuration = 3;
export class MessageService {
  error = (content = "Something went wrong!", duration?) => {
    message.error({
      content: content,
      duration: duration ?? defaultDuration,
    });
  };

  success = (content = "Successful", duration?) => {
    message.success({
      content: content,
      duration: duration ?? defaultDuration,
    });
  };

  warning = (content = "Warning Message", duration?) => {
    message.warning({
      content: content,
      duration: duration ?? defaultDuration,
    });
  };

  info = (content = "Information message", duration?) => {
    message.info({
      content: content,
      duration: duration ?? defaultDuration,
    });
  };
}

const messages = new MessageService();
export default messages;
