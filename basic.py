from flask import Flask

app = Flask(__name__)

# simple static index route
@app.route('/')
def index():
    return "Hello World!!!"


# static dynamic
@app.route('/about')
def about():
    return "About Page !!!"


# dynamic Routes
@app.route('/about/<person>')
def about_person(person):
    return f"Hello {person}!!!"


if __name__ == "__main__":
    app.run(debug  = True)
    


