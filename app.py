from flask import Flask, render_template

# Initialize Flask app
app = Flask(__name__)

# Endpoints
@app.route('/')
def home():
    return render_template('index.html')
@app.route('/about')
def about():
    return render_template('about.html')
# Run the app
if __name__ == "__main__":
    # Ensure the app runs with debug mode enabled (useful for development)
    app.run(debug=True)