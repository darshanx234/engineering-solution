# Hero Section Video Integration Guide

## ✅ Implementation Complete

The hero section has been updated to support video backgrounds with automatic fallback to static images.

---

## 📋 Setup Instructions

### Step 1: Generate Your Video with Gemini
1. Open [gemini.google.com](https://gemini.google.com)
2. Access video generation feature
3. Copy **Prompt #1** from `prompts/video-generation-prompts.md`
4. Generate the video
5. Download as MP4

### Step 2: Convert to WebM (Optional but Recommended)
```bash
# Install ffmpeg if not already installed
# Windows: choco install ffmpeg
# Mac: brew install ffmpeg
# Linux: sudo apt install ffmpeg

# Convert MP4 to WebM for better compression
ffmpeg -i hero-animation.mp4 -c:v libvpx-vp9 -crf 30 -c:a libopus hero-animation.webm

# Or compress the MP4 for web
ffmpeg -i hero-animation.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k hero-animation-compressed.mp4
```

### Step 3: Place Videos in Project
Save your generated videos to: `public/videos/`

Required file structure:
```
public/
  └── videos/
      ├── hero-animation.mp4    (required)
      └── hero-animation.webm   (optional but recommended for better compression)
```

> **Note**: The hero section will automatically fall back to the poster image (static) if videos aren't found or don't load.

---

## 🎨 How It Works

### Video Background Implementation
```typescript
<video
  autoPlay           // Auto-play when section is in view
  muted              // Required for autoplay in browsers
  loop               // Loop continuously
  playsInline        // Mobile-friendly playback
  poster="/images/hero-bg.jpg"  // Fallback image before video loads
  className="h-full w-full object-cover opacity-20"
  aria-label="Architecture construction time-lapse background video"
>
  <source src="/videos/hero-animation.webm" type="video/webm" />
  <source src="/videos/hero-animation.mp4" type="video/mp4" />
  {/* Fallback Image for unsupported browsers */}
</video>
```

### Key Features
✅ **WebM + MP4 Support** - Works across all modern browsers  
✅ **Automatic Fallback** - Shows poster image if video fails to load  
✅ **Mobile Optimized** - `playsInline` for mobile app experience  
✅ **Accessibility** - ARIA labels for screen readers  
✅ **Performance** - 20% opacity allows text readability  
✅ **Smooth Animation** - Framer Motion integration  

---

## 📊 Video File Size Recommendations

| Format | Quality | File Size | Bitrate |
|--------|---------|-----------|---------|
| **MP4** | 1920x1080 @ 30fps | 8-12MB | 4-5 Mbps |
| **WebM** | 1920x1080 @ 30fps | 4-6MB | 2-3 Mbps |
| **Poster** | 1920x1080 | ~100-200KB | - |

---

## 🧪 Testing Your Video

### Desktop Testing
1. Run `npm run dev`
2. Navigate to home page
3. Video should autoplay in background
4. Text should be readable with 20% opacity overlay
5. No console errors

### Mobile Testing
1. Use Chrome Dev Tools (F12)
2. Toggle device toolbar
3. Verify video plays smoothly
4. Check that poster image shows during load

### Browser Compatibility
| Browser | MP4 | WebM | Fallback |
|---------|-----|------|----------|
| Chrome | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ✅ |
| Safari | ✅ | ❌ | ✅ |
| Edge | ✅ | ✅ | ✅ |
| Mobile | ✅ | ⚠️ | ✅ |

---

## ⚡ Performance Optimization

### Current Setup
- ✅ WebM format (40% smaller than MP4)
- ✅ 4-5 second duration (quick load)
- ✅ 30fps (balanced quality)
- ✅ Poster image preload
- ✅ Muted autoplay allowed in all browsers

### Tips to Keep Performance High
1. **Keep video under 6 seconds** - Faster load time
2. **Use WebM + MP4** - Best compression
3. **Test on mobile network** - Use Chrome DevTools throttling
4. **Monitor LCP** - Should be < 2.5 seconds
5. **Check file size** - Aim for < 15MB total

---

## 🔄 Swapping Videos

To use a different video:
1. Generate new video with Gemini
2. Replace `hero-animation.mp4` in `public/videos/`
3. Convert to WebM and replace `hero-animation.webm`
4. Refresh browser cache (or do hard refresh: Ctrl+Shift+R)
5. Done! No code changes needed

---

## 🎯 Next Steps

Once you have your video file:

1. **Download from Gemini** - Save as `hero-animation.mp4`
2. **Convert to WebM** - Use FFmpeg command above
3. **Place in `public/videos/`** folder
4. **Test locally** - Run `npm run dev`
5. **Deploy** - Video will be served automatically

---

## 📝 Additional Videos

You can create and use videos for other sections:

```
public/
  └── videos/
      ├── hero-animation.mp4          # Hero section (current)
      ├── blueprint-animation.mp4     # Services section
      ├── construction-process.mp4    # About section
      ├── before-after.mp4            # Portfolio section
      └── building-flyover.mp4        # Large projects
```

To use these in other components, follow the same pattern shown in hero section.

---

## ❓ Troubleshooting

### Video Not Playing?
- Check file exists in `public/videos/`
- Verify file format is MP4 or WebM
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R)

### Video Stuttering?
- File size too large? Compress with FFmpeg
- Browser cache issue? Clear and refresh
- Mobile performance? Use lighter bitrate video

### No Poster Image?
- File `hero-bg.jpg` exists in `public/images/` ✅
- Poster shows while video loading
- Good UX during slow connections

### Sound Playing?
- Should be silent (muted attribute is set)
- Video must be muted for autoplay
- Check video file - ensure no audio track or is 0 volume

---

## 🚀 Deployment

Videos will be:
1. **Static assets** - Served by CDN (Vercel, etc.)
2. **Cached properly** - Long cache headers
3. **Optimized delivery** - Automatic next/image handling

No additional setup needed for production deployment!

---

**Status**: ✅ Ready for Video Integration  
**Last Updated**: April 2026  
**Version**: 1.0
