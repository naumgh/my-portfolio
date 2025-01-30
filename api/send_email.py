from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
import os
import traceback

load_dotenv()

app = Flask(__name__)
CORS(app)

# Gmail SMTP Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('SMTP_EMAIL')
app.config['MAIL_PASSWORD'] = os.getenv('SMTP_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('SMTP_EMAIL')

mail = Mail(app)

@app.route('/api/send-email', methods=['POST'])
def send_mail():
    try:
        data = request.json
        name = data['name']
        email = data['email']
        message_body = data['message']

        msg = Message(
            subject=f"New Contact Message from {name}",
            recipients=[os.getenv('SMTP_EMAIL')],
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message_body}"
        )

        mail.send(msg)
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        print("Error Occurred:")
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

# Vercel requires this handler function
def handler(event, context):
    return app(event, context)
