from flask import * 
 
# Flask constructor
app = Flask(__name__)   
 
# A decorator used to tell the application
# which URL is associated function
@app.route('/')
def input():
    return render_template("First.html")


@app.route('/second') 
def display():
    if request.method=='post':
       source = str(request.form['source']) 
       destination = str(request.form['destination']) 
       return render_template('last.html', result=5) 
if __name__ == "_main_":
    app.run