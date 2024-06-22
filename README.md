<h1 align="center">Welcome to EarthMark</h1>

<p align="left">EarthMark is a real estate price prediction website built to provide accurate property price estimates based on various factors like area size, number of bedrooms, number of bathrooms, etc.  </p>

![EARTHMARK-DEMO-VIDEO](https://github.com/iamRabia-N/EarthMark/assets/115794049/e97a4a60-b0cc-4c02-8af4-0e2f8fc61c56)


## Key Features
- Property Price Prediction
- User-Friendly Interface
- Market Trends

  
## Tech Stack

| **Category**      | **Toolkit Used**                                                                                                                                                                   |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frontend          | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| Backend           | ![Python](https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/-Flask-000000?style=for-the-badge&logo=flask&logoColor=white)                                    |
| Machine Learning | ![Scikit Learn](https://img.shields.io/badge/-Scikit%20Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)                                                                                                                |
| Design Tool      | ![Figma](https://img.shields.io/badge/-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)                                                                                                                |


## Setup and Usage

To set up a complete flask environment for the EarthMark project, follow these steps:

#### Step 1: Clone the Repository

```bash
git clone https://github.com/iamRabia-N/EarthMark.git
```

#### Step 2: Navigate to the Project Directory

Once the cloning process is complete, navigate to the project directory using the `cd` command:

```bash
cd EarthMark
```

#### Step 3: Setup Virtual Environment

First, install the `virtualenv` package:

```bash
pip install virtualenv
```

Then, create a new virtual environment named "env" (you can choose any name) using the following command:

```bash
virtualenv env
```

Activate the virtual environment by running the activation script. Note that the command might differ depending on your operating system:

For Windows (PowerShell):

```bash
.\env\Scripts\Activate.ps1
```

For macOS/Linux:

```bash
source env/bin/activate
```

#### Step 4: Install Flask

With the virtual environment activated, you can now install flask and its dependencies using pip:

```bash
pip install flask
```


#### Step 5: Start Deploying in Browser


```bash
python main.py
```

## Credits
- The images and videos used in this project are taken from [Pexels](https://www.pexels.com/). 
- The dataset used in this project is taken from [Kaggle](https://www.kaggle.com/datasets/howisusmanali/house-prices-2023-dataset).



## Future Enhancements

#### Enhancement 01: Logo Integration
A logo will be added to the top-left corner of each page. This addition aims to enhance the project's visual identity and professionalism. This addition is depicted in the following high-fidelity wireframe images.

<table style="width:100%">
  <tr>
    <th style="text-align:center">Landing Page</th>
    <th style="text-align:center">Price Prediction Page</th>
  </tr>
  <tr>
    <td style="text-align:center"><img src="https://github.com/iamRabia-N/EarthMark/assets/115794049/c6709cdd-10e8-44e5-a2ff-8ff693da863f" width="380"></td>
    <td style="text-align:center"><img src="https://github.com/iamRabia-N/EarthMark/assets/115794049/410e4e1b-741a-429b-8c70-5a9190e0269e" width="380"></td>
  </tr>
  <tr>
    <th style="text-align:center">About Page</th>
    <th style="text-align:center">Market Trends & Latest News</th>
  </tr>
  <tr>
    <td style="text-align:center"><img src="https://github.com/iamRabia-N/EarthMark/assets/115794049/73024486-0325-42be-8549-1199fe2da89b" width="380"></td>
    <td style="text-align:center"><img src="https://github.com/iamRabia-N/EarthMark/assets/115794049/de7812d3-4011-4b57-a056-53b72f7206e1" width="380"></td>
  </tr>
</table>



#### Enhancement 02: Recommendation Slider 
Addition of a recommendation slider based on user input. For example, it will display a list of properties in the same price range as the user's inputed based predicted price. This slider will appear directly below the output section. This addition is depicted in the following high-fidelity wireframe images.

| Current Design | Future Enhancement Work |
|--------------------------|--------------------------|
| <img src="https://github.com/iamRabia-N/EarthMark/assets/115794049/f013fbb3-c0f2-48b2-8201-9061c9136177" width="400"> | <img src="https://github.com/iamRabia-N/EarthMark/assets/115794049/3fa7dad5-a912-46c4-9de6-05bd702c241a" width="400"> |



## Important NOTE
In this project, an API named "NewsAPI" is used on the website's "Market Trends and Latest News" page. To ensure this page works properly, you need to set up an API key. Follow these steps:

- Go to [NewsAPI](https://newsapi.org/) website and sign up for a free account.
- After signing up and logging in, look for the option to generate a new API key. Copy the API key provided.
- Open the project's repository on your local machine. Create a file named `.env` in the root directory. Inside the `.env` file, add the following line:

```bash
API_KEY=your_api_key_here
```
     
- Replace `your_api_key_here` with the API key you obtained from NewsAPI. Save the `.env` file.


Furthermore, when running the repository, ensure the dataset file path in the main.py is correctly configured to match its location on your system. By default, the dataset is expected to be located at the following address:

```bash
df = pd.read_csv(r"E:\EarthMark\House_Price_dataset.csv")
```

If you fork this repository to a different location on your machine, you will need to update the file path accordingly in your code.


## Bug Reporting

Feel free to open an issue on GitHub if you find any bug.

## Feature Requests

Feel free to open an issue on GitHub to request additional features that would benefit your use case.

