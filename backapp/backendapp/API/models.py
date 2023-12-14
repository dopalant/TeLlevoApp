from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombrecompleto = models.CharField(max_length=50)
    rut = models.CharField(primary_key=True,max_length=12)
    telefono = models.CharField(max_length=20)
    correo = models.CharField(max_length=50,default='')
    contrasenia = models.CharField(max_length=50,default='')
    
    class Meta:
        db_table = 'usuario'

class Conductor(models.Model):
    idconductor = models.CharField(primary_key=True,max_length=3,default=1)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    rut = models.CharField(max_length=12)
    telefono = models.CharField(max_length=20)
    puntuacion = models.CharField(max_length=3)
    correo = models.CharField(max_length=50,default='')
    contrasenia = models.CharField(max_length=20,default='')
    vehiculo = models.CharField(max_length=20)
    patente = models.CharField(max_length=20)

    class Meta:
        db_table = 'conductor'

class viaje(models.Model):
    idviaje = models.CharField(primary_key=True,max_length=3,default='')
    longitud = models.CharField(max_length=50)
    latitud = models.CharField(max_length=50)
    inicio = models.CharField(max_length=20)
    termino = models.CharField(max_length=20)
    precio = models.CharField(max_length=10)
    fecha = models.CharField(max_length=50)
    calificacion = models.CharField(max_length=3,default='')

    class Meta:
        db_table = 'viaje'