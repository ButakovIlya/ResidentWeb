FROM nginx

ENV APP_HOST=app
ENV APP_PORT=8000
ENV LISTEN_PORT=80

COPY ./start.sh /start.sh
RUN chmod +x /start.sh

# Создайте папку для SSL-сертификатов внутри контейнера
RUN mkdir -p /etc/ssl

# Скопируйте ваш SSL-сертификат и закрытый ключ внутрь контейнера
COPY residentweb.crt /etc/ssl/residentweb.crt
COPY residentweb.key /etc/ssl/residentweb.key
# COPY ca.crt /etc/ssl/ca.crt

RUN touch /etc/nginx/conf.d/default.conf

COPY ./proxy_params /etc/nginx/
COPY ./default.conf.tpl /etc/nginx/

ENTRYPOINT [ "sh", "-c", "/start.sh" ]

