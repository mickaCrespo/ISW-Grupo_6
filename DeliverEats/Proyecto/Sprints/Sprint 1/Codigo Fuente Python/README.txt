1. COMO INSTALAR DJANGO EN WINDOWS

Nota: Proyecto creado con Django 1.11 y Python 3.4.3

Source: https://docs.djangoproject.com/es/1.11/howto/windows/

a. Debe estar instalado Python 3 y agregado a la variable PATH (es una casilla cuando se instala).

b. A partir de Python 3.4 pip (gestor de paquete de python) ya debe venir incluido por lo que instalarlo no será necesario.


2. TRABAJANDO CON DJANGO
Django viene con un manager que nos permitira realizar varias tareas, lo principal que querremos hacer es levantar el
servidor de desarrollo integrado:

a. Para activar el entorno virtual hay que llegar con una consola al directorio de trabajo (Codigo Fuente Python) y ejecutar
"workon DeliveryEatEnv", luego de esto el prompt indicara que estamos en el entorno virtual.

b. Nos desplazamos a la carpeta DeliveryEat "cd DeliveryEat" donde se encuentra el archivo manage.py

c. Iniciamos el servidor con el comando "python manage.py runserver"

d. Verificamos que el servidor se haya iniciado ingresando desde un navegador web a localhost:8000


3. ESTRUCTURA DE UN PROYECTO DJANGO
El proyecto se encuentra completamente dentro de la carpeta DeliveryEat.

DeliveryEat/
    DeliveryEat/ : contiene las configuraciones del proyecto en general (settings.py) y el inicio de definicion de urls (urls.py)
    Main/  : contiene el backend completo desde la base de datos hasta los endpoints REST.
        migrations/ : contiene un historial de cambios realizados al esquema de la base de datos.
        models.py : contiene la definicion de las clases, a partir de esto genera el esquema de base de datos necesario.
        serializers.py : contiene la definicion de clases que "convierten" los modelos en algo que se puede retornar via JSON.
        views.py : contiene la definicion de clases de vista, son las que se encargan de aplicar los filtros y retornar el JSON.
        urls.py : contiene la definicion de la urls validas y la vista con la que se relacionan.
        * : los otros archivos no son necesarios por ahora.
    webapp/ : contiene el front end completo.
        migrations/ : igual que en el anterior, pero estara vacia porque no se conecta directamente a la base de datos.
        urls.py : conecta la url inicial ("/") con el archivo index.html
        static/ : contiene todos los archivos de soporte (estaticos), tales como imagenes, js, y css. Se accede mediante la url ("/static")
        templates/webapp/ : contiene el index.html
        * : los otros archivos es igual que el anterior pero para el front-end no seran necesarios.
    static/ : Donde el framework reunira los archivos static para publicarlos con un servidor web. (No colocar cosas manualmente)
    db.sqlite3 : por el momento se esta usando una base de datos SQLite, el framework puede hacer el cambio a mysql sin problemas. (Esta pendiente).
    manage.py : permite administrar el proyecto desde linea de comandos


COMANDOS UTILES:
python manage.py runserver : inicia el servidor de desarrollo y lo actualiza cuando detecta cambios en algun archivo.

python manage.py makemigrations : lee los archivos models.py y genera los cambios necesarios para la base de datos (pero no los aplica)
python manage.py migrate : aplica los cambios generados con makemigrations a la base de datos
