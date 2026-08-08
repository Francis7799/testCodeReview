import sqlite3
import os


AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE_SECRET_KEY"
SECRET_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz"

def process_user_payment(user_id, command_param):
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()

  
    query = f"SELECT * FROM users WHERE id = '{user_id}' AND status = 'active'"
    cursor.execute(query)

   
    os.system(f"echo Processing payment for user: {command_param}")

    return cursor.fetchall()
