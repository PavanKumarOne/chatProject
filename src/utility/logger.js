const LogLevel = Object.freeze({
  Trace: 'trace',
  Debug: 'debug',
  Info: 'info',
  Warn: 'warn',
  Error: 'error',
});

export default class Logger {
  _isDebugMode = true;

  get isDebugMode() {
    return this._isDebugMode;
  }

  set isDebugMode(isDebug) {
    this._isDebugMode = isDebug;
  }

  trace = message => {
    this.logWithLevel(LogLevel.Trace, message);
  };

  debug = message => {
    this.logWithLevel(LogLevel.Debug, message);
  };

  info = message => {
    this.logWithLevel(LogLevel.Info, message);
  };

  warn = message => {
    this.logWithLevel(LogLevel.Warn, message);
  };

  error = message => {
    this.logWithLevel(LogLevel.Error, message);
  };

  logWithLevel = (logLevel, message) => {
    const logMessage = JSON.parse(JSON.stringify(message));
    if (this.isDebugMode) {
      console[logLevel.toString()](logMessage);
    }
  };
}

const logger = new Logger();
export {logger as Logger};
