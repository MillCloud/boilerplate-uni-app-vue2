declare global {
  interface IResponse {
    success: boolean;
    code: string;
    message: string;
    [propName: string]: any;
  }
}

export {};
