#!/bin/bash

echo "Starting build process..."

# Install dependencies
npm ci

# Run the build
npm run build

# Verify out directory exists
if [ -d "out" ]; then
    echo "✅ Build successful - out directory created"
    ls -la out/
else
    echo "❌ Build failed - out directory not found"
    exit 1
fi