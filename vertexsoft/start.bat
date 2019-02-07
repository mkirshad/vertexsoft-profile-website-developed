\env\Scripts\activate.bat
rem python manage.py migrate
python manage.py runserver %COMPUTERNAME%:80 --insecure
rem start "" http://192.168.8.10:8000/mdc/start_tcp_service

pause
rem pip install django --upgrade
rem pip install psycopg2 --upgrade
rem pip install djangorestframework
rem python -m pip install --upgrade pip
rem pip install django-cors-headers
rem pip install django-rest-auth
rem pip install django-allauth
