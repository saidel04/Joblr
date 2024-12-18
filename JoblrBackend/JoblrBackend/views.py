from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import authenticate
from django.utils.decorators import method_decorator
from JoblrBackend.models import User  # Import your custom User model
import json
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        data = request.data
        username = data.get("username")
        password = data.get("password")

        # Authenticate user
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                refresh = RefreshToken.for_user(user)
                response_data = {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                }

                # Check for first login
                if user.firstLogin:
                    response_data["message"] = "First login setup required"
                    return JsonResponse(response_data, status=201)
                else:
                    response_data["message"] = "Login successful"
                    return JsonResponse(response_data, status=200)
            else:
                return JsonResponse({"message": "User account is inactive"}, status=403)
        else:
            return JsonResponse({"message": "Invalid credentials"}, status=401)


@csrf_exempt
def user_list(request):
    """
    Returns a list of all users in the system (excluding passwords).
    """
    if request.method == 'GET':
        users = User.objects.all().values('id', 'username', 'email', 'is_active', 'is_staff')
        return JsonResponse(list(users), safe=False, status=200)
    return JsonResponse({"message": "Invalid request method"}, status=400)




@csrf_exempt
def userAuth(request):
    """
    Authenticates a user and returns tokens.
    """
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")

            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    refresh = RefreshToken.for_user(user)
                    response_data = {
                        "refresh": str(refresh),
                        "access": str(refresh.access_token),
                    }

                    if user.firstLogin:
                        response_data["message"] = "First login setup required"
                        return JsonResponse(response_data, status=201)  # Status 201 for first login
                    else:
                        response_data["message"] = "Login successful"
                        return JsonResponse(response_data, status=200)  # Status 200 for normal login
                else:
                    return JsonResponse({"message": "User account is inactive"}, status=403)
            else:
                return JsonResponse({"message": "Invalid credentials"}, status=401)
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format"}, status=400)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=500)

    return JsonResponse({"message": "Invalid request method"}, status=400)


@csrf_exempt
def userCreate(request):
    """
    Creates a new user in the system.
    """
    if request.method == 'POST':
        try:
            # Parse the JSON body
            data = json.loads(request.body)

            # Debugging logs to check payload
            print(f"Received data: {data}")

            # Check if all necessary fields are present
            required_fields = ["username", "email", "password", "confirmPassword"]
            for field in required_fields:
                if field not in data:
                    return JsonResponse({"message": f"Missing field: {field}"}, status=400)

            # Check if the email already exists
            if User.objects.filter(email=data.get("email")).exists():
                return JsonResponse({"message": "Email already exists"}, status=400)

            # Check if the username already exists
            if User.objects.filter(username=data.get("username")).exists():
                return JsonResponse({"message": "Username already exists"}, status=400)

            # Ensure passwords match
            if str(data.get("password")).strip() != str(data.get("confirmPassword")).strip():
                return JsonResponse({"message": "Passwords do not match"}, status=400)

            # Create and save the user
            user = User.objects.create(
                username=data.get("username"),
                email=data.get("email"),
                password=make_password(data.get("password")),  # Hash the password
                is_active=True  # Set the user as active by default
            )

            # The signal will now handle creating the UserData instance
            return JsonResponse({"message": "User created successfully"}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format"}, status=400)
        except Exception as e:
            print(f"Error: {e}")  # Log the error for debugging
            return JsonResponse({"message": str(e)}, status=500)

    return JsonResponse({"message": "Invalid request method"}, status=400)

