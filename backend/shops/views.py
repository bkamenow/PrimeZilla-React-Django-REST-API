from rest_framework import generics

from .models import Shop, Item, Cart, CartItem
from .serializers import ShopSerializer, ItemSerializer, CartItemSerializer


class ShopList(generics.ListCreateAPIView):

    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class ShopDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class OwnerShopsList(generics.ListAPIView):
    serializer_class = ShopSerializer

    def get_queryset(self):
        owner_id = self.kwargs['owner_id']
        return Shop.objects.filter(owner_id=owner_id)


###### ITEMS #####
class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemListForShop(generics.ListAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        shop_id = self.kwargs['pk']
        return Item.objects.filter(shop_id=shop_id)


class CreateItemView(generics.CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def perform_create(self, serializer):
        shop_id = self.kwargs['shop_id']
        serializer.save(shop_id=shop_id)

##### CART #####


class AddToCart(generics.CreateAPIView):
    serializer_class = CartItemSerializer

    def perform_create(self, serializer):
        user = self.request.user
        cart, created = Cart.objects.get_or_create(user=user)
        serializer.save(cart=cart)


class CartItemList(generics.ListAPIView):
    serializer_class = CartItemSerializer

    def get_queryset(self):
        user = self.request.user
        cart, created = Cart.objects.get_or_create(user=user)
        return CartItem.objects.filter(cart=cart)
