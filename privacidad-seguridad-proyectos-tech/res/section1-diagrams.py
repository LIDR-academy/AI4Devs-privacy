from diagrams import Diagram
from diagrams.aws.storage import S3
from diagrams.aws.compute import Lambda
from diagrams.aws.ml import Rekognition

with Diagram("Sección 1 - Infraestructura de Protección de Imágenes", show=False):
    s3_bucket = S3("Almacenamiento de Imágenes")
    lambda_func = Lambda("Función Lambda de Preprocesamiento")
    rekognition = Rekognition("Detección de Imágenes")
    
    s3_bucket >> lambda_func >> rekognition