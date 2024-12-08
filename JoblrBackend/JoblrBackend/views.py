from django.http import JsonResponse
from .models import User
from .serializers import UserSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from django.utils.decorators import method_decorator
import json
from .models import User

def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def userAuth(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")

            # Authenticate the user
            user = User.objects.get(username=username)
            if user.password == password:
                return JsonResponse({"message": "User authenticated successfully"}, status=200)
            else:
                return JsonResponse({"message": "Invalid password"}, status=401)
        except User.DoesNotExist:
            return JsonResponse({"message": "User not found"}, status=404)
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format"}, status=400)

    return JsonResponse({"message": "Invalid request method"}, status=400)