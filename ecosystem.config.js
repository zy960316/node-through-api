module.exports = {
  apps: [
    {
      name: 'app_reset_public',
      instances:1,
      script: './bin/www',
      cwd: './',
      watch: [
        'public',
      ],
      ignore_watch: [
        'node_modules',
        'logs'
      ],
      node_args: '--harmony',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      out_file: './logs/out.log', // 普通日志路径
      error_file: './logs/err.log', // 错误日志路径
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    }
  ]
};
