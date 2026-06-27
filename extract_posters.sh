#!/bin/bash
set -e

# Make sure posters dir exists
mkdir -p frontend/public/posters

echo "Extracting posters..."

# 1. Hero
echo "Extracting hero poster..."
ffmpeg -y -ss 00:00:01 -i "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4" -vframes 1 -vf "scale=1280:-2" -q:v 80 frontend/public/posters/hero.webp

# 2. Featured
echo "Extracting featured poster..."
ffmpeg -y -ss 00:00:01 -i "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4" -vframes 1 -vf "scale=1280:-2" -q:v 80 frontend/public/posters/featured.webp

# 3. Philosophy
echo "Extracting philosophy poster..."
ffmpeg -y -ss 00:00:01 -i "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" -vframes 1 -vf "scale=1280:-2" -q:v 80 frontend/public/posters/philosophy.webp

# 4. Strategy
echo "Extracting strategy poster..."
ffmpeg -y -ss 00:00:01 -i "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" -vframes 1 -vf "scale=1280:-2" -q:v 80 frontend/public/posters/strategy.webp

# 5. Craft
echo "Extracting craft poster..."
ffmpeg -y -ss 00:00:01 -i "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4" -vframes 1 -vf "scale=1280:-2" -q:v 80 frontend/public/posters/craft.webp

echo "All posters extracted successfully!"
