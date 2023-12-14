from django.shortcuts import render
from rest_framework.generics import *
from .models import *
from .serializers import *
# Create your views here.
class UsuarioList(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UserSerializer
    
    def get_object(self):
        rut = self.kwargs['rut']
        return Usuario.objects.get(rut=rut)

class UsuarioDetalle(RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        rut = self.kwargs['rut']
        return Usuario.objects.get(rut=rut)
    
class ConductorList(ListCreateAPIView):
    queryset = Conductor.objects.all()
    serializer_class = ConductorSerializer

    def get_object(self):
        rut = self.kwargs['rut']
        return Conductor.objects.get(rut=rut)

class ConductorDetalle(RetrieveUpdateDestroyAPIView):
    queryset = Conductor.objects.all()
    serializer_class = ConductorSerializer

    def get_object(self):
        rut = self.kwargs['rut']
        return Conductor.objects.get(rut=rut)
    
class ViajeList(ListCreateAPIView):
    queryset = viaje.objects.all()
    serializer_class = VieajeSerializer

    def get_object(self):
        idviaje = self.kwargs['idviaje']
        return viaje.objects.get(idviaje=idviaje)
    
class ViajeDetalle(RetrieveUpdateDestroyAPIView):
    queryset = viaje.objects.all()
    serializer_class = VieajeSerializer

    def get_object(self):
        idviaje = self.kwargs['idviaje']
        return viaje.objects.get(idviaje=idviaje)