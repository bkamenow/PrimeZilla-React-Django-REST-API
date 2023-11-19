from django.urls import path
from .views import ShopList, ShopDetail, ItemList, ItemDetail, ItemListForShop


urlpatterns = [
    path('', ShopList.as_view(), name='shop-list'),
    path('<int:pk>/', ShopDetail.as_view(), name='shop-detail'),
    path('items/', ItemList.as_view(), name='item-list'),
    path('items/<int:pk>/', ItemDetail.as_view(), name='item-detail'),
    path('<int:pk>/items/', ItemListForShop.as_view(),
         name='item-list-for-shop'),
]
