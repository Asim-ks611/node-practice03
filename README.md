##Load test
`**loadtest -c 10 --rps 200 http://localhost:8000**`

>loadtest [-n requests] [-c concurrency] [-k] URL

1. -c : concurrency , here it is 10
2. --rps : requests per second
3. -n : no of requests
4. -k : means keep alive connection
