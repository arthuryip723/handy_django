from .models import Worker
from rest_framework import serializers


class WorkerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Worker
        fields = ('id', 'name')