from diagrams import Diagram
from diagrams.aws.network import VPC
from diagrams.aws.ml import Sagemaker

with Diagram("Sección 2 - Infraestructura LLMs Segura", show=False):
    sagemaker = Sagemaker("Amazon SageMaker")
    vpc = VPC("Red Privada (VPC)")
    
    vpc >> sagemaker