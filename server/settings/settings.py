from pathlib import Path
import os
import environ

env = environ.Env()
environ.Env.read_env()

# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# # EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
# EMAIL_HOST = 'smtp.yandex.ru'
# EMAIL_PORT = 465
# EMAIL_HOST_USER = 'residentdom@yandex.ru'
# EMAIL_HOST_PASSWORD = 'radkzvokobmpfoza'
# EMAIL_USE_TLS = False
# EMAIL_USE_SSL = True
# DEFAULT_FROM_EMAIL = 'residentdom@yandex.ru'
# SERVER_EMAIL = 'residentdom@yandex.ru'

# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.yandex.ru'
EMAIL_PORT = 465
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True
DEFAULT_FROM_EMAIL = env('DEFAULT_FROM_EMAIL')
SERVER_EMAIL = env('SERVER_EMAIL')




BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = env('SECRET_KEY')

DEBUG = False
# DEBUG = env('DEBUG')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'corsheaders',
    'api.apps.ApiConfig'
]

ALLOWED_HOSTS = ["*"]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173"
]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'corsheaders.middleware.CorsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'settings.urls'

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'file_format': {
            'format': '{levelname} {asctime} {module} {message}',
            'style': '{',
        },
        'console_format': {
            'format': '{asctime} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': 'debug.log',
            'formatter': 'file_format',  
            'encoding': 'utf-8',
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'console_format',  
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file', 'console'],  
            'level': 'INFO',
        },
        'api': {
            'handlers': ['file'],  
            'level': 'DEBUG',
        },
    }

}

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'settings.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
        'DEFAULT_RENDERER_CLASSES': (
            'rest_framework.renderers.JSONRenderer',
        )
    }

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = "static/"   # e.g. localhost:80/static/styles.css
MEDIA_URL = "media/"     # e.g. localhost:80/media/image.jpg

# directory where all static files of the app are going to be put
STATIC_ROOT = "/vol/static"

# directory where all files uploaded by users(media files) are going to be put
MEDIA_ROOT = "/vol/media"

STATICFILES_DIRS = [
    BASE_DIR / "static",  
]

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"



DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# ALLOWED_HOSTS = ['residentweb.com', 'www.residentweb.com']

# SECURE_SSL_REDIRECT = True  # Включает автоматическое перенаправление HTTP на HTTPS
# SECURE_BROWSER_XSS_FILTER = True  # Включает фильтрацию XSS в браузере
# SECURE_CONTENT_TYPE_NOSNIFF = True  # Включает защиту от MIME-типов, указанных сервером
# SESSION_COOKIE_SECURE = True  # Устанавливает флаг Secure для куки сессии
# CSRF_COOKIE_SECURE = True  # Устанавливает флаг Secure для CSRF-куки

# SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

CORS_ALLOWED_ORIGINS = [
    "https://residentweb.ru",
    "https://www.residentweb.com",
    "http://residentweb.ru",
    "http://www.residentweb.com",
]
ALLOWED_HOSTS = ['residentweb.ru']
CSRF_TRUSTED_ORIGINS = ['https://residentweb.ru']
# USE_X_FORWARDED_HOST = True
# USE_X_FORWARDED_PORT = True
# USE_X_FORWARDED_PROTO = True

