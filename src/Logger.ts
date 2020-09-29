interface IConfig {
  appName: string;
}


class Logger {
  config: IConfig
  constructor() {
    this.config = {
      appName: 'Not configured'
    };
  }

  setConfig(config: IConfig) {
    this.config = config;
  }

  log(message: string, ...params: any) {
    console.log(this.config.appName, message, params);
  }
}

export default new Logger();
