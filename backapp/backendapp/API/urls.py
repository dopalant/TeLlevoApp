from django.urls import re_path as url
from rest_framework.urlpatterns import format_suffix_patterns
from API import views

urlpatterns = [
    url(r'^api/users/$', views.UsuarioList.as_view(),name='usuario-list'), 
    url(r'^api/users/(?P<rut>[\w.-]+)/$', views.UsuarioDetalle.as_view(),name='usuario-detalle'),  
    url(r'^api/conductores/$', views.ConductorList.as_view(),name='conductor-list'), 
    url(r'^api/conductores/(?P<rut>[\w.-]+)/$', views.ConductorDetalle.as_view(),name='conductor-detalle'), 
    url(r'^api/viajes/$', views.ViajeList.as_view(),name='viaje-list'), 
    url(r'^api/viajes/(?P<rut>[\w.-]+)/$', views.ViajeDetalle.as_view(),name='viaje-detalle'), 
]
urlpatterns = format_suffix_patterns(urlpatterns)