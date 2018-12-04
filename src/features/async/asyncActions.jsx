import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR
} from "./asyncConstants";

export const asynActionStart = creds => {
  return {
    type: ASYNC_ACTION_START
  };
};

export const asynActionFinish = () => {
  return {
    type: ASYNC_ACTION_FINISH
  };
};

export const asynActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  };
};
