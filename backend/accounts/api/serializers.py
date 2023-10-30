from rest_framework.serializers import ModelSerializer
from ..models import MyUser


class UserSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = ('id', 'username', 'first_name', 'last_name', 'email',)
