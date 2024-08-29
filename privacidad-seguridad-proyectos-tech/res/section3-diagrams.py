from diagrams import Diagram
from diagrams.aws.analytics import Redshift
from diagrams.aws.security import KMS, IAM

with Diagram("Infraestructura de Almacenamiento Seguro", show=False):
    redshift = Redshift("Amazon Redshift")
    kms = KMS("AWS KMS")
    iam = IAM("Control de Acceso IAM")
    
    kms >> redshift
    iam >> redshift