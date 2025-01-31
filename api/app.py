from http.server import BaseHTTPRequestHandler
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# Flask-Mail Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('SMTP_EMAIL')
app.config['MAIL_PASSWORD'] = os.getenv('SMTP_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('SMTP_EMAIL')

mail = Mail(app)

@app.route('/api/app', methods=['POST'])
def send_mail():
    data = request.json
    name = data['name']
    email = data['email']
    message_body = data['message']

    msg = Message(
        subject=f"New contact message from {name} ({email})",
        recipients=[os.getenv('SMTP_EMAIL')],
        body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message_body}"
    )

    mail.send(msg)
    return jsonify({"message": "Message sent successfully!"}), 200


#needed for vercel
class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        return app(request.environ, self.start_response)
