# Photo Aura

Photo Aura is an innovative web application that allows users to upload images, which are then preprocessed and analyzed using deep learning techniques. The application leverages ImageNet pre-trained weights to extract detailed information about the uploaded image, providing insights and predictions related to the image content.

## Features

- **Image Upload**: Users can upload images from their local device for analysis.
- **Preprocessing**: Uploaded images are preprocessed to optimize them for model inference.
- **Deep Learning Analysis**: Utilizes TensorFlow and ImageNet pre-trained weights to analyze images and provide detailed information about the objects or scenes in the image.
- **Modern UI**: Designed with TailwindCSS for a sleek, responsive, and modern user interface.
- **Real-time Results**: Provides quick and accurate predictions about the content of the uploaded images.

## Technologies Used

- **Frontend**: React.js, TailwindCSS for styling
- **Backend**: Node.js, Express.js
- **Database**: MongoDB for storing user data and image metadata
- **Machine Learning**: TensorFlow for model inference, using ImageNet pre-trained weights
- **Deployment**: Deployed on platforms like Heroku or Netlify

## Setup and Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayushgit12/photoaura.git
   ```
   
2. **Install dependencies:**
   ```bash
   cd backend
   npm install
   cd ..
   cd frontend
   npm install
   ```

3. **Start the backend server:**
   ```bash
   cd ..
   cd backend
   npm start
   ```

4. Start the frontend
   ```bash
   cd ..
   cd frontend
   npm run dev
   ```

##Access the application:

The website should be running locally at http://localhost:5173.
###Image Processing Workflow
Image Upload: Users upload an image through the UI.
Preprocessing: The image is resized and normalized to match the input requirements of the model.
Model Inference: TensorFlow processes the image using ImageNet pre-trained weights to classify and detect objects within the image.
Display Results: The predicted labels and confidence scores are displayed to the user.

##Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements or fixes.
   
