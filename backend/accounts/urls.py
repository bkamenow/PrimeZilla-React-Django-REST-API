from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('register', views.UserRegister.as_view(), name='register'),
    path('login', views.UserLogin.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout', views.UserLogout.as_view(), name='logout'),

    path('users', views.UsersView.as_view(), name='user'),
    path('profile', views.getProfile, name='profile'),

    path('details/<int:pk>', views.UserDetailsView.as_view(), name='user-details'),
    path('edit/<int:pk>', views.EditUser.as_view(), name='edit-user'),
    path('delete/<int:pk>', views.DeleteUser.as_view(), name='delete-user'),
]
