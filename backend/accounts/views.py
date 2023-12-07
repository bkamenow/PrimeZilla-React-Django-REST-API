from django.contrib.auth import logout
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer, MyTokenObtainPairSerializer
from rest_framework import permissions, status, generics

from rest_framework_simplejwt.views import TokenObtainPairView
from .models import AppUser


class UserRegister(generics.CreateAPIView):
    queryset = AppUser.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer


class UserLogin(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


class UserDetailsView(APIView):
    permission_classes = ()

    def get(self, request, pk):
        user = AppUser.objects.get(pk=pk)
        serializer = UserSerializer(user)
        return Response({pk: serializer.data}, status=status.HTTP_200_OK)


class EditUser(APIView):
    permission_classes = ()

    def put(self, request, pk):
        user = AppUser.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteUser(APIView):
    permission_classes = ()

    def delete(self, request, pk):
        user = AppUser.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UsersView(APIView):
    permission_classes = ()

    def get(self, request, format=None):
        users = AppUser.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
