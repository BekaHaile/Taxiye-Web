import { showMessage } from "../actions/navigation";

export function showError(next) {
  next(
    showMessage(
      true,
      "Error, request has been rejected please try again!",
      "error"
    )
  );
}

export function showTimeOut(next) {
  next(showMessage(true, "Timeout Error, please try again!", "error"));
}

export function showSuccess(next) {
  next(showMessage(true, "Success, request has been completed!", "success"));
}

export function showWarning(next) {
  next(
    showMessage(
      true,
      "Warning, please make sure your input is valid and try again!",
      "warning"
    )
  );
}

export function showInfo(next, message, type) {
  next(showMessage(true, message, type));
}

