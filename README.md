## Overview
__This is meltomir's portfolio site.__

## Prerequisites

Ensure you have Node.js version 22.12.0 or higher installed.


## Get Started

```bash
git clone https://github.com/Tsukichan555/meltomir.git
cd meltomir

npm install
npm run dev
```

## Directory Structure
```
src
├── components
│   ├── arrangement
│   │   ├── Footer
│   │   │   ├── Footer.js          // Footer component
│   │   │   └── Footer.module.css  // Footer styles
│   │   ├── Header
│   │   │   ├── Header.js          // Header component
│   │   │   └── Header.module.css  // Header styles
│   │   └── Layout
│   │       ├── Layout.js          // Layout component
│   │       └── Layout.module.css  // Layout styles
│   └── features
│       └── ThreeDModel
│           ├── ThreeDModel.js     // 3D Model component
│           └── ThreeDModel.module.css // 3D Model styles
├── const.js                       // Constants
├── contents
│   ├── artworks                   // Directory containing individual artwork descriptions
│   │   ├── work1.md               // Sample artwork markdown file    
│   │   └── work2.md               //           〃
│   └── profile.md                 // Profile content
├── pages
│   ├── 404.js                     // 404 error page
│   ├── Gallery
│   │   └── [artworkId].js         // Dynamic artwork page
│   ├── Gallery.js                 // Gallery page
│   ├── Link.js                    // Link page
│   ├── _app.js                    // Custom App component
│   └── index.js                   // Home page
└── style
    ├── Artwork.module.css         // Artwork styles
    ├── Gallery.module.css         // Gallery styles
    ├── Home.module.css            // Home styles
    ├── Link.module.css            // Link styles
    └── global.css                 // Global styles
```