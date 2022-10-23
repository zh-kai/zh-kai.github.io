# Nginx configs

## CORS

```bash
# cors.conf
add_header 'Access-Control-Allow-Origin' '*';
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
add_header 'Access-Control-Max-Age' 1728000;
# add_header 'Content-Type' 'text/plain; charset=utf-8';
if ($request_method = 'OPTIONS') {
  return 204;
}
```
