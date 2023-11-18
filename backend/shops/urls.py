from django.urls import path
from .views import ShopList, ShopDetail

urlpatterns = [
    path('', ShopList.as_view(), name='shop-list'),
    path('<int:pk>/', ShopDetail.as_view(), name='shop-detail'),
]
