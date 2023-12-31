from django.urls import path
from . import views


urlpatterns = [
    path('', views.ShopList.as_view(), name='shop-list'),
    path('<int:pk>/', views.ShopDetail.as_view(), name='shop-detail'),
    path('items/', views.ItemList.as_view(), name='item-list'),
    path('items/<int:pk>/', views.ItemDetail.as_view(), name='item-detail'),
    path('<int:shop_id>/items/create/',
         views.CreateItemView.as_view(), name='create-item'),

    path('<int:pk>/items/', views.ItemListForShop.as_view(),
         name='item-list-for-shop'),

    path('<int:owner_id>/shops/',
         views.OwnerShopsList.as_view(), name='owner-shops-list'),

    path('get-cart-items/', views.get_cart_items, name='get_cart_items'),
    path('add-to-cart/', views.add_to_cart, name='add-to-cart'),
    path('remove-from-cart/<int:item_id>/',
         views.remove_from_cart, name='remove_from_cart'),
    #     path('cart-item/<int:item_id>/', views.update_cart_item, name='cart-item'),
]
