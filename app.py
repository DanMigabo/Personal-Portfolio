<<<<<<< HEAD
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
=======
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
>>>>>>> 3aff6891c6e2c564eb232a3e2e8060646fdb9ec1
    app.run(debug=True)