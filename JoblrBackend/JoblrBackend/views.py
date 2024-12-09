from django.http import JsonResponse
from .models import User
from .serializers import UserSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password


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
            if check_password(password, user.password):  # Compare plaintext with hash
                return JsonResponse({"message": "User authenticated successfully"}, status=200)
            else:
                return JsonResponse({"message": "Invalid password"}, status=401)
        except User.DoesNotExist:
            return JsonResponse({"message": "User not found"}, status=404)
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format"}, status=400)

    return JsonResponse({"message": "Invalid request method"}, status=400)
@csrf_exempt
def userCreate(request):
    if request.method == 'POST':
        try:
            # Parse the JSON body
            data = json.loads(request.body)
            
            # Check if the email already exists
            if User.objects.filter(email=data.get("email")).exists():
                return JsonResponse({"message": "Email already exists"}, status=400)
            
            # Hash the password if it exists
            if 'password' in data:
                data['password'] = make_password(data['password'])
            
            # Use the hashed password in the serializer
            serializer = UserSerializer(data=data)
            
            if serializer.is_valid():
                serializer.save()
                return JsonResponse({"message": "User created successfully"}, status=201)
            else:
                return JsonResponse({"message": serializer.errors}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format"}, status=400)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=500)

    return JsonResponse({"message": "Invalid request method"}, status=400)
