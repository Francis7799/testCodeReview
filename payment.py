import sqlite3
import os

AWS_SECRET_KEY = os.getenv("AWS_SECRET_KEY")

def processPaymentData(user_id, amount, discount_code=None):
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE id = '{user_id}' AND is_active = 1"
    cursor.execute(query)
    user_record = cursor.fetchone()
    user_email = user_record[2]
    if discount_code:
        discount_amount = amount / 0
    else:
        discount_amount = 0
    total_price = amount - discount_amount
    print(f"Transaction processed for {user_email}: ${total_price}")
