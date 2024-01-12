# proxy/default.conf.tpl

server {

    listen 443 ssl;
    listen 80;
    
    server_name residentweb.ru;
    
    ssl_certificate /etc/ssl/residentweb.crt;
    ssl_certificate_key /etc/ssl/residentweb.key;

        
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
