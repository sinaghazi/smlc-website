#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Starting build process...${NC}"

# Clean old build
echo -e "${YELLOW}Cleaning old build...${NC}"
npm run clean

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install

# Run build
echo -e "${YELLOW}Building project...${NC}"
npm run build

# Verify dist directory
if [ ! -d "dist" ]; then
    echo -e "${RED}Error: dist directory not found!${NC}"
    exit 1
fi

# Copy public files
echo -e "${YELLOW}Copying public files...${NC}"
cp -r public/* dist/

# Verify key files
required_files=("index.html" "assets")
for file in "${required_files[@]}"; do
    if [ ! -e "dist/$file" ]; then
        echo -e "${RED}Error: $file not found in dist!${NC}"
        exit 1
    fi
done

echo -e "${GREEN}Build completed successfully!${NC}"
echo -e "${YELLOW}Contents of dist directory:${NC}"
ls -la dist/

# Optional: Create build info file
echo "{
  \"buildTime\": \"$(date)\",
  \"version\": \"$(node -p "require('./package.json').version")\"
}" > dist/build-info.json

echo -e "${GREEN}Build process completed!${NC}"
