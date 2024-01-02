from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from .models import *
from django.views.decorators.csrf import csrf_exempt

import logging
logger = logging.getLogger('api') 

@csrf_exempt
@api_view(['POST'])
@authentication_classes([SessionAuthentication])
@permission_classes([AllowAny])
def create_user(request):
    data = request.data
    try:
        new_user = ContactUser.objects.create(
            email=data['email'],
            fio=data['firstName'] + " " + data['lastName'],
            message=data['message'],
            phone=data['phone'],
            requestType=data['requestType'],
        )

        if new_user:
            if not contact_mail_request(request, new_user):
                return Response({'error': f'Произошла ошибка при отправке письма!'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else: pass

        return Response({'message': f'{new_user.fio} успешно создан.'}, status=status.HTTP_201_CREATED)

    except Exception as e:
        print("Ошибка = ", e)
        return Response({'error': f'Произошла ошибка: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def contact_mail_request(request, new_user:ContactUser) -> True:
    try:
        subject = f'Заявка на обратную связь от "{new_user.fio}"'
        message = f"Телефон: {new_user.phone}\nПочта: {new_user.email}\nТип запроса: {new_user.requestType}\n\nСообщение: {new_user.message}\n"
        from_email = 'theroflx@yandex.ru'
        recipient_list = ['theroflx@yandex.ru']
        send_mail(subject, message, from_email, recipient_list)
        return True
    
    except Exception as e:
        return False
