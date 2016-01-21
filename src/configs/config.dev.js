const configs = {
  'imageMapping': {
    'image/png': '.png',
    'image/jpg': '.jpg'
  },
  'server': {
    port: 3001,
    maxBytes: 20971520, //   20MB
    imagesStorage: __dirname + '\\Upload\\'
  },
  'logging': {
    'opsInterval': 1000,
    'reports': [
      {
        reporter: require('good-console'),
        events: { log: '*', response: '*' },
        config: {
          format: 'YYYY-MM-DD HH:mm:ss'
        }
      },
      {
        reporter: require('good-file'),
        events: { log: '*', response: '*', ops: '*' },
        config: {
          path: __dirname + '\\logs',
          format: 'YYYY-MM-DD',
          extension: '.log',
          prefix: 'ImaUp',
          rotate: 'daily'
        }
      }
    ]
  },
  'database': {
    connectionString: 'localhost:27017/ima-up-dev'
  }
}

export function getConfiguration () {
  return configs
}
