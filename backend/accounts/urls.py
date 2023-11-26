from django.urls import path
from . import views

urlpatterns = [
    path('register', views.UserRegister.as_view(), name='register'),
    path('login', views.UserLogin.as_view(), name='login'),
    path('logout', views.UserLogout.as_view(), name='logout'),
    path('user', views.UserView.as_view(), name='user'),
    path('details/<int:pk>', views.UserDetailsView.as_view(), name='user-details'),
    path('edit/<int:pk>/', views.EditUser.as_view(), name='edit-user'),
    path('delete/<int:pk>/', views.DeleteUser.as_view(), name='delete-user'),
]
