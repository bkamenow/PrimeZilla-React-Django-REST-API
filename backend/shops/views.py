import json
from .serializers import CartItemSerializer
from .models import CartItem
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
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
    permission_classes = [AllowAny]
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
    permission_classes = [AllowAny]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        quantity = self.request.query_params.get('quantity', 1)

        # Include quantity in the serialized data
        serialized_data = self.get_serializer(instance).data
        serialized_data['quantity'] = quantity

        return Response(serialized_data)


class ItemListForShop(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ItemSerializer

    def get_queryset(self):
        shop_id = self.kwargs['pk']
        return Item.objects.filter(shop_id=shop_id)


class CreateItemView(generics.CreateAPIView):
    permission_classes = ()
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def perform_create(self, serializer):
        shop_id = self.kwargs['shop_id']
        serializer.save(shop_id=shop_id)

##### CART #####


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_cart(request):
    user = request.user
    data = json.loads(request.body)
    item_id = data.get('itemId')
    quantity = data.get('quantity', 1)

    item_instance = Item.objects.get(id=item_id)

    cart_item, created = CartItem.objects.get_or_create(
        owner=user, item=item_instance)

    if not created:
        cart_item.quantity += quantity
        cart_item.save()

    serializer = CartItemSerializer(cart_item)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_cart_items(request):
    user = request.user
    cart_items = CartItem.objects.filter(owner=user)
    serializer = CartItemSerializer(cart_items, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_from_cart(request, item_id):
    user = request.user

    try:
        cart_item = CartItem.objects.get(owner=user, item=item_id)
        cart_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except CartItem.DoesNotExist:
        return Response({'error': 'Item not found in the cart.'}, status=status.HTTP_404_NOT_FOUND)
