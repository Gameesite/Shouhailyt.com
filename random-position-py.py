from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/random-position')
def random_position():
    x = random.randint(0, 100)
    y = random.randint(0, 100)
    return jsonify({'x': x, 'y': y})

if __name__ == '__main__':
    app.run(debug=True)
