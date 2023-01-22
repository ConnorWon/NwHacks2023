from playground.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from playground.modelSerializers.serializers import ClothingSerializer
from playground.models import User, Closet, Clothing

# File Description
# is a request handler

@api_view(['POST'])
def create_clothing(request):
    data = request.data["clothing"]
    closet = Closet.objects.get(pk=data["closet"])
    clothing = Clothing(name = data["name"], color = data["color"], clothing_type = data["clothing_type"], closet = closet)
    clothing.save()
    return Response(True)


@api_view(['POST'])
def masterlist(request):
    data = request.data["username"]
    user = User.objects.get(username__icontains=data)
    closet = Closet.objects.get(user=user)
    clothes = Clothing.objects.filter(closet=closet)
    results = []
    for clothing in clothes:
        serializer = ClothingSerializer(clothing, context={'request': request}, many=False)
        results.append(serializer.data)
    # sent = []
    # closetSerializer = ClosetSerializer(closet, context={'request': request}, many=False)
    # closetData = [closetSerializer.data]
    # sent.append(closetData)
    # sent.append(results)
    return Response(results)

@api_view(['POST'])
def signup(request):
    data = request.data["username"]
    print(data)
    try:
        obj = User.objects.get(username__icontains=data)
        if (obj):
            return Response(False)
        else:
            user = User(username=data)
            closet = Closet(name="My Closet", user=user)
            user.save()
            closet.save()
            num = closet.pk
            return Response({'key': True, 'pk': num })
    except:
        user = User(username=data)
        closet = Closet(name="My Closet", user=user)
        user.save()
        closet.save()
        num = closet.pk
        print(num)
        return Response({'key': True, 'pk': num})

@api_view(['POST'])
def login(request):
    # try:
        data = request.data["username"]
        print(data)
        obj = User.objects.get(username__icontains=data)
        closet = Closet.objects.get(user=obj)
        num = closet.pk
        if (obj):
            return Response({'key': True, 'pk': num})
        else:
            return Response(False)
    # except:
    #         return Response(False)