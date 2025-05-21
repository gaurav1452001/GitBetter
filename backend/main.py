from fastapi import FastAPI
import uvicorn
from git import Repo
import os

app = FastAPI()

def clone_repo(repo_url: str, local_dir: str):
    if not os.path.exists(local_dir):
        os.makedirs(local_dir)
    try:
        Repo.clone_from(repo_url, local_dir) # Corrected to use Repo.clone_from
        return True
    except Exception as e:
        print(f"Error cloning repo: {e}")
        return False
    
    
@app.get("/")
def read_root():
    return {"message": "Hello from Python backend"}

@app.get("/{username}/{repo}")
def convert_text(username: str, repo: str):
    # Use a raw string (r"...") or forward slashes for the path
    # Option 1: Raw string
    # clone_repo(f"https://github.com/{username}/{repo}", r"D:\reaction")
    # Option 2: Forward slashes (recommended for cross-platform compatibility)
    clone_repo(f"https://github.com/{username}/{repo}", "D:/reaction")
    return {"username": username, "repo": repo, "message": "Hello from Python backend"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="127.0.0.1", port=port)

