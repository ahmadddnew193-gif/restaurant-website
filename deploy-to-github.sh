#!/bin/bash

# Usage: ./deploy-to-github.sh YOUR_GITHUB_TOKEN

if [ -z "$1" ]; then
    echo "Usage: ./deploy-to-github.sh YOUR_GITHUB_TOKEN"
    echo "Example: ./deploy-to-github.sh ghp_xxxxxxxxxxxxxxxxxxxx"
    exit 1
fi

TOKEN="$1"
USERNAME="ahmadddnew193-gif"
REPO_NAME="restaurant-ebsite"

echo "🚀 Creating repository on GitHub..."

# Create the repository
RESPONSE=$(curl -s -X POST \
  -H "Authorization: token ${TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"${REPO_NAME}\",\"description\":\"Modern restaurant website with interactive menu, gallery, and reservation system\",\"private\":false}")

# Check if repo was created
if echo "$RESPONSE" | grep -q "html_url"; then
    echo "✅ Repository created successfully!"
    REPO_URL=$(echo "$RESPONSE" | grep -o '"html_url": "[^"]*' | cut -d'"' -f4)
    echo "📦 Repository URL: $REPO_URL"
    
    echo ""
    echo "📤 Pushing code to GitHub..."
    
    # Add remote and push
    git remote add origin https://${USERNAME}:${TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git 2>/dev/null || git remote set-url origin https://${USERNAME}:${TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git
    git branch -M main
    git push -u origin main
    
    echo ""
    echo "🎉 SUCCESS! Your code is now on GitHub!"
    echo "🌐 View it at: https://github.com/${USERNAME}/${REPO_NAME}"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Visit https://pages.cloudflare.com to deploy"
    echo "   2. Or visit https://vercel.com to deploy"
    echo "   3. Check DEPLOYMENT.md for detailed instructions"
else
    echo "❌ Error creating repository:"
    echo "$RESPONSE"
fi
