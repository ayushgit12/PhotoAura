from PIL import Image
from io import BytesIO
import numpy as np
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, decode_predictions


input_shape = (224,224)

def load_model():
     model = MobileNetV2(input_shape=input_shape + (3,),
                        alpha=1.0,
                        include_top=True,
                        weights='imagenet',  # Use 'imagenet' for pretrained weights
                        pooling=None,
                        classes=1000,
                        classifier_activation='softmax')

     return model

_model = load_model()

def read_image(image_encoded):
     pil_image = Image.open(BytesIO(image_encoded))
     return pil_image




def pre_process(image: Image.Image):
     image = image.resize(input_shape)
     image = np.asfarray(image)
     image = image / 127.50 - 1.0
     image = np.expand_dims(image, 0)

     return image


def predict(image: np.ndarray):
     predictions = _model.predict(image)
     predictions = decode_predictions(predictions)[0][0][1]
     return predictions

