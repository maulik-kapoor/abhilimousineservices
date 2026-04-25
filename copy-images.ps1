# Copy generated AI images to the project's public/images directory
# Run this script from the project root after npm install

$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$imagesDir = Join-Path $projectDir "public\images"
$aiImagesDir = "C:\Users\mauli\.gemini\antigravity\brain\b5112c63-0cab-432e-8113-dd6f12e8ba3f"

# Create images directory if it doesn't exist
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir | Out-Null
    Write-Host "Created $imagesDir"
}

# Copy and rename the AI-generated images
$imageMap = @{
    "hero_background_1777113995976.png"         = "hero_bg.jpg"
    "audi_q7_luxury_1777113951917.png"          = "audi_q7.jpg"
    "mercedes_sprinter_luxury_1777113979164.png" = "mercedes_sprinter.jpg"
    "mercedes_vclass_luxury_1777114021123.png"  = "mercedes_vclass.jpg"
    "airport_transfer_sydney_1777115388471.png"  = "airport_transfer.jpg"
}

foreach ($src in $imageMap.Keys) {
    $srcPath = Join-Path $aiImagesDir $src
    $dstPath = Join-Path $imagesDir $imageMap[$src]
    
    if (Test-Path $srcPath) {
        Copy-Item $srcPath $dstPath -Force
        Write-Host "Copied $src -> $($imageMap[$src])"
    } else {
        Write-Host "WARNING: Source not found: $srcPath"
    }
}

Write-Host "`nAll images copied! Run 'npm run dev' to start the development server."
