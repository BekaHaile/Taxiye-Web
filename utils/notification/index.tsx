import { notification } from "antd";

const defaultDuration = 2;
export class NotificationService {
  error = (message, title?, duration?) => {
    notification.error({
      message: title,
      description: message,
      duration: defaultDuration ? duration : 2,
    });
  };

  success = (message, title?, duration?) => {
    notification.success({
      message: title,
      description: message,
      duration: defaultDuration ? duration : 2,
    });
  };

  warning = (message, title?, duration?) => {
    notification.warning({
      message: title,
      description: message,
      duration: defaultDuration ? duration : 2,
    });
  };

  info = (message, title?, duration?) => {
    notification.info({
      message: title,
      description: message,
      duration: defaultDuration ? duration : 2,
    });
  };
}

const notifier = new NotificationService();
export default notifier;
