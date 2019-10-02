from rest_framework import routers
from book.viewsets import BookViewSet


router = routers.SimpleRouter()
router.register('books', BookViewSet)

urlpatterns = router.urls
