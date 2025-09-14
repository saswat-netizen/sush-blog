version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
        - echo "Installing dependencies..."
    build:
      commands:
        - echo "Building Next.js application..."
        - npm run build
        - echo "Build completed successfully"
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*