from rest_framework.viewsets import ModelViewSet
from ..models import MyUser
from .serializers import UserSerializer


class UserViewSet(ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = UserSerializer
