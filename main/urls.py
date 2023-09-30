from django.urls import path

from main.views import MainView, FormView

app_name = 'main'


urlpatterns = [
    path('', MainView.as_view(), name='main_page'),
    path('form/', FormView.as_view(), name='form'),
]