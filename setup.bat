@echo off
echo ================================================
echo   ABHI LIMOUSINE SERVICES - Setup Script
echo ================================================
echo.
echo Step 1: Installing npm dependencies...
call npm install
echo.
echo Step 2: Installing Framer Motion, Lucide, React Icons...
call npm install framer-motion lucide-react react-icons embla-carousel-react
echo.
echo Step 3: Installing Tailwind CSS...
call npm install -D tailwindcss postcss autoprefixer
echo.
echo Step 4: Initializing Tailwind CSS...
call npx tailwindcss init -p
echo.
echo Step 5: Copying images to public/images/...
powershell -ExecutionPolicy Bypass -File copy-images.ps1
echo.
echo ================================================
echo   Setup complete! Run: npm run dev
echo ================================================
pause
