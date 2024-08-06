from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from prediction import read_image, pre_process, predict

app = FastAPI()
origins = ["*"]
           

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
     return {"Hello": "World"}

@app.post("/predict_image")
async def predict_image(file: UploadFile = File(...)):
     image = read_image(await file.read())
     image = pre_process(image)
     predictions = predict(image)
     return predictions



if __name__ == "__main__":
     uvicorn.run(app, host="localhost", port=8000)

