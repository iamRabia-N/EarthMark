from flask import Flask, render_template, request
import pandas as pd
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import train_test_split

app = Flask(__name__)

# Load the dataset
df = pd.read_csv(r"E:\Download stuff\flask\model\House_Price_dataset.csv")

# Preprocessing
df['area'] = pd.to_numeric(df['area'].str.replace(' Marla', ''), errors='coerce')

X = df[['area', 'bedrooms', 'baths', 'location']]
y = df['price']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

numerical_features = ['area', 'bedrooms', 'baths']
categorical_features = ['location']

numerical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='mean')),
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# Model
model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1, max_depth=3, random_state=42)

pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                           ('model', model)])

# Train the model
pipeline.fit(X_train, y_train)

@app.route('/')
def landing_page():
    return render_template('landing_page.html')

@app.route('/price_prediction', methods=['GET', 'POST'])
def price_prediction():
    errors = {}  # Dictionary to store form validation errors
    input_data = {}  # Dictionary to store user input data
    predicted_price = None  # Initialize predicted_price to None
    if request.method == 'POST':
        try:
            # Get user input from the form
            area = float(request.form['land-area'])
            bedrooms = float(request.form['num-bedrooms'])
            baths = float(request.form['num-bathrooms'])
            location = request.form['location']

            # Store user input data
            input_data = {
                'area': area,
                'bedrooms': bedrooms,
                'bathrooms': baths,
                'location': location
            }

            # Make prediction using the loaded pipeline
            user_input = pd.DataFrame({'area': [area],
                                       'bedrooms': [bedrooms],
                                       'baths': [baths],
                                       'location': [location]})
            predicted_price = pipeline.predict(user_input)[0]

        except ValueError:
            # Handle invalid input errors
            errors['input'] = 'Invalid input. Please enter numeric values.'

    # Render the template with predicted price and user input data
    return render_template('price_prediction.html', predicted_price=predicted_price, input_data=input_data, errors=errors)


@app.route('/about')
def about():
    return render_template('about_page.html')

@app.route('/news')
def news():
    return render_template('news_page.html')

if __name__ == "__main__":
    app.run(debug=True)
