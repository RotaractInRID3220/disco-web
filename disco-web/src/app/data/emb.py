import os
import requests
import json

# Set your Gemini API key here or use an environment variable
API_KEY = "AIzaSyClcP4tq6f64UMpzX4nrpf0JZA4OtWykfg"
# Gemini endpoint (replace with the correct endpoint if necessary)
ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent"

def get_embedding(text):
    headers = {
        "Content-Type": "application/json"
    }
    params = {
        "key": API_KEY
    }
    payload = {
        "content": {
            "parts": [{"text": text}]
        }
    }
    response = requests.post(ENDPOINT, headers=headers, params=params, json=payload)
    response.raise_for_status()
    embedding = response.json()["embedding"]["values"]
    return embedding

if __name__ == "__main__":
    print("Enter the text section to embed:")
    text = input("> ")
    print("\nGenerating embedding...")
    try:
        embedding = get_embedding(text)
        print("\nEmbedding (copy this into your JSON):")
        print(json.dumps(embedding))
    except Exception as e:
        print(f"Error: {e}")