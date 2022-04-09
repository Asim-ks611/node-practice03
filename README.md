## Load test :=>

`loadtest -c 10 --rps 200 http://localhost:8000`

>loadtest [-n requests] [-c concurrency] [-k] URL

1. -c : concurrency , here it is 10
2. --rps : requests per second
3. -n : no of requests
4. -k : means keep alive connection
5. -t : timelimit ,Max number of seconds to wait until requests no longer go out.

##  PM2 :=>
- PM2 is a production process manager for Node.js applications with a built-in load balancer.
- allows us to keep applications alive forever.
- eload them without downtime and to facilitate common system admin tasks.

> Start application instance: `pm2 start app.js -i`
> Start application with max core instances : `pm2 start app.js -i -1`

1. Terminal Monitering : `pm2 monit `
2. Log Management : `pm2 logs App-name|--json|--format`
3. List all running applications : `pm2 list`
4. To have more details on a specific application : `pm2 describe <id|app_name>`
5. Managing apps is straightforward:
  -  `pm2 stop     app_name|namespace|id|'all'|json_conf`
  -  `pm2 restart  app_name|namespace|id|'all'|json_conf`
  -  `pm2 delete   app_name|namespace|id|'all'|json_conf`