from django.apps import AppConfig

class JoblrBackendConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "JoblrBackend"

    def ready(self):
        import JoblrBackend.signals  # Import the signals to register them
