# proxy/default.conf.tpl

server {
    listen 443 ssl;
    ssl_certificate     /etc/nginx/ssl/server.crt;
    ssl_certificate_key /etc/nginx/ssl/server.key;
    client_max_body_size 100M; 

    location /static {
        alias /vol/static;
    }

    location /media {
        alias /vol/media;
    }

    location / {
        proxy_pass      http://${APP_HOST}:${APP_PORT};
        include         /etc/nginx/proxy_params;
    }
}
