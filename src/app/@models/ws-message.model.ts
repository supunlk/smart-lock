export interface DoorData {
  time: string;
  isLocked: boolean;
  intruderAlert: boolean;
  secured: boolean;
}

export interface WsMessage {
  subscriptionId: 0;
  errorCode: 0;
  errorMsg: null;
  data: {
    [key: string]: any[]
  };
  latestValues: {
    isLocked: 1636048684485,
    temperature: 1635606107360,
    humidity: 1636048684485
  };
}
