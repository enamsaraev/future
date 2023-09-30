from django.shortcuts import render, redirect
from django.views import View

from main.forms import DataForm


class MainView(View):
    def get(self, request, *args, **kwargs):
        ctx = {
            'form':DataForm()
        }
        return render(request, 'index.html', context=ctx)
    

class FormView(View):
    def post(self, request, *args, **kwargs):
        form = DataForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
        return redirect('main:main_page')
