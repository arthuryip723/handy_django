from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader
from rest_framework import viewsets
from .models import Worker
from .serializers import WorkerSerializer


def index(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    template = loader.get_template("root/index.html")
    # raise Exception('I know Python!')
    return HttpResponse(template.render({}, request))

class WorkerViewSet(viewsets.ModelViewSet):
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer