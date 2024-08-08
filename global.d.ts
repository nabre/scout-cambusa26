declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_URL_DEV: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
  