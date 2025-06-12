# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the job02 subdirectory containing a cute timer application designed specifically for female users with pastel aesthetics and gentle animations.

## Essential Commands

### Development and Testing
```bash
# Open the timer application directly in browser
open timer_app.html

# For development server (from parent directory)
cd ..
npm run legacy-dev        # Python HTTP server (http://localhost:3000)

# Access via browser
http://localhost:3000/job02/timer_app.html
```

### Documentation
```bash
# View requirements specification
open 要件定義書.md
```

## Project Architecture

### Single-File Application Pattern
- **timer_app.html**: Complete standalone HTML application with embedded CSS and JavaScript
- **要件定義書.md**: Comprehensive requirements specification document in Japanese
- **img/bog.png**: Dog image asset used in the application

### Design Philosophy
This application follows a "kawaii" (cute) design system specifically targeting female users:

1. **Color Palette**: Pastel pinks, lavender, and soft blues
2. **Animation Style**: Gentle, elegant movements (avoiding rotation and harsh effects)
3. **Typography**: Japanese font stack optimized for readability
4. **Emoji Integration**: Extensive use of emojis for visual appeal
5. **Layout**: Carefully controlled spacing with specific padding/margin requirements

### Technical Stack
- **Frontend**: Pure HTML5 + CSS3 + Vanilla JavaScript
- **Audio**: Web Audio API for timer completion notifications
- **Storage**: In-memory only (no persistence)
- **Dependencies**: None (completely self-contained)

## Key Implementation Patterns

### CSS Architecture
- **Gradient Backgrounds**: Multi-stop linear gradients for visual depth
- **Custom Animations**: `sparkle`, `gentlePulse`, `kawaiiBlink`, `kawaiiPulse`
- **Component-Based Styling**: Separate classes for each UI element
- **Responsive Design**: Mobile-first with specific breakpoints

### JavaScript Structure
- **State Management**: Simple object-based state with global variables
- **Timer Logic**: `setInterval`-based countdown with 1-second precision
- **Event Handling**: Direct DOM manipulation with event listeners
- **Validation**: Input constraints (minutes: 0-99, seconds: 0-59)

### UI Component Specifications
- **Dog Image**: 90px circular, no bottom margin, hover effects
- **Timer Display**: Large serif font in decorative container with emoji accents
- **Control Buttons**: Gradient backgrounds with emoji suffixes and hover animations
- **Status Display**: Background gradients with 10px horizontal padding
- **Overall Layout**: 60px body padding for breathing room

## Development Workflow

### Making Changes
1. **Read Requirements**: Always consult `要件定義書.md` before making changes
2. **Update Documentation**: Increment version number and add to change history
3. **Maintain Aesthetics**: Preserve the gentle, feminine design language
4. **Test Responsiveness**: Verify on mobile, tablet, and desktop

### Design Guidelines
- **Avoid Harsh Animations**: No rotation, intense flashing, or aggressive movements
- **Maintain Color Harmony**: Stick to established pastel palette
- **Preserve Spacing**: Respect specific padding/margin requirements
- **Unicode Support**: Use emoji liberally but ensure browser compatibility

### Requirements Documentation Pattern
The `要件定義書.md` follows a comprehensive Japanese business document structure:
- **Version Control**: Semantic versioning with detailed change history
- **Functional Requirements**: Detailed feature specifications
- **Non-Functional Requirements**: Performance, compatibility, and UX criteria
- **Technical Specifications**: Implementation details and constraints
- **Testing Criteria**: Acceptance criteria for each feature

## Critical Implementation Details

### Timer Precision
- Uses `setInterval` with 1000ms intervals
- Maintains accuracy through direct second decrementation
- Handles edge cases (zero time, invalid input)

### Audio Integration
- Web Audio API with base64-encoded notification sound
- Graceful fallback when audio playback fails
- No external audio file dependencies

### Responsive Behavior
- Mobile-optimized font sizes and spacing
- Touch-friendly button dimensions
- Flexible layout that adapts to screen constraints

### Error Handling
- Input validation with automatic correction (seconds > 59 → 59)
- Image fallback with `onerror` attribute
- Graceful degradation for unsupported features

This project exemplifies the "job folder" development pattern used in the parent repository, where individual projects maintain their own requirements, assets, and documentation while following established coding conventions.