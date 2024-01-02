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

DEBUG = True
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
        'ENGINE': 'django.db.backends.mysql', 
        'NAME': env('DB_NAME'),
        'USER': env('DB_USER'),
        'PASSWORD': env('DB_PASSWORD'),
        'HOST': env('DB_HOST'),
        'PORT': '3306',
	'OPTIONS': {
            'charset': 'utf8mb4',
            'init_command': 'SET collation_connection = utf8mb4_unicode_ci',
        },
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

STATIC_URL = 'static/'
MEDIA_URL = '/media/'



STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"



DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
