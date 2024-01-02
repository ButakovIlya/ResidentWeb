FROM python:3

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /django

COPY ./ /django/

ENV DJANGO_SUPERUSER_PASSWORD yes


RUN pip install -r requirements.txt

RUN python manage.py collectstatic