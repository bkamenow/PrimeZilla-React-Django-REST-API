from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .models import Shop, Item, CartItem
from .serializers import ShopSerializer, ItemSerializer, CartItemSerializer


class ShopList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class ShopDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class OwnerShopsList(generics.ListAPIView):
    serializer_class = ShopSerializer

    def get_queryset(self):
        owner_id = self.kwargs['owner_id']
        return Shop.objects.filter(owner_id=owner_id)


###### ITEMS #####
class ItemList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemListForShop(generics.ListAPIView):
    permission_classes = [AllowAny]
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


class CartItemCreateView(generics.ListCreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

    def perform_create(self, serializer):
        user = self.request.user

        print(f"User: {user}")
        if user.is_authenticated and hasattr(user, 'cart'):
            app_user = user.cart
            print(f"AppUser: {app_user}")
            serializer.save(user=app_user)
            app_user.add(serializer.instance)
        else:
            serializer.save(user=None)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
