FROM python:3.11.5-slim-bullseye

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app

COPY . /app/
COPY ./requirements.txt /app/

# Устанавливаем зависимости
RUN pip install -r requirements.txt

# Выполняем миграции
RUN python manage.py makemigrations

# Применяем миграции
RUN python manage.py migrate

# Собираем статические файлы
RUN python manage.py collectstatic --noinput

# Запускаем Gunicorn
ENTRYPOINT ["gunicorn", "settings.wsgi", "-b", "0.0.0.0:8000"]
