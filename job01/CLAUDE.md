# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development
```bash
# No build process required - static HTML files
# Open paint app directly in browser
open paint_app.html

# For development with live server (if needed)
python3 -m http.server 3000    # Python 3
python -m SimpleHTTPServer 3000 # Python 2

# Alternative with Node.js (if npx is available)
npx serve .
```

### Testing
```bash
# Manual testing in browsers
open paint_app.html                    # macOS
start paint_app.html                   # Windows
xdg-open paint_app.html               # Linux
```

## Project Architecture

This is a single-page web paint application built with vanilla HTML, CSS, and JavaScript. The project follows a self-contained, single-file architecture approach.

### Core Architecture

**Single-File Application Pattern**: The main application (`paint_app.html`) contains all HTML structure, CSS styling, and JavaScript functionality embedded within a single file. This approach:
- Eliminates dependency management complexity
- Ensures portability and easy deployment
- Provides immediate browser compatibility without build steps

**Canvas-Based Drawing System**: The application uses HTML5 Canvas API for all drawing operations:
- `PaintApp` class encapsulates all drawing logic and state management
- Context-based rendering with `globalCompositeOperation` for pen/eraser modes
- Event-driven architecture for mouse and touch interactions

### Component Structure

**PaintApp Class Design**:
- **State Management**: Tracks current tool (`pen`/`eraser`), brush size, and drawing state
- **Event Handling**: Unified mouse and touch event processing for cross-device compatibility
- **Tool System**: Modular tool switching with visual feedback and cursor changes
- **Drawing Engine**: Canvas context manipulation with proper line cap/join settings

**UI Architecture**:
- **Toolbar System**: Flexbox-based responsive tool selection and size controls
- **Canvas Container**: Centered drawing area with border styling
- **Responsive Design**: Mobile-first approach with breakpoint-based layout adjustments

### Key Technical Patterns

**Drawing State Machine**:
- `startDrawing()` → `draw()` → `stopDrawing()` lifecycle
- Context state management with `globalCompositeOperation` switching
- Path-based drawing with `beginPath()` and continuous `lineTo()` calls

**Cross-Platform Input Handling**:
- Unified coordinate system with `getBoundingClientRect()` for accurate positioning
- Touch event normalization using `e.touches[0]` for mobile compatibility
- Event delegation pattern for efficient memory usage

**Tool Implementation Strategy**:
- Pen tool: `source-over` composite operation with black stroke
- Eraser tool: `destination-out` composite operation for true erasing
- Size control: Real-time slider feedback with visual size indicator

## Development Guidelines

### File Organization
- `paint_app.html`: Complete paint application (main deliverable)
- `requirements.md`: Japanese specification document defining project scope
- `index.html`: Currently empty - intended as project entry point

### Code Conventions
- **JavaScript**: ES6+ class-based architecture with proper encapsulation
- **CSS**: BEM-inspired naming with responsive breakpoints at 600px
- **HTML**: Semantic structure with accessibility considerations
- **Internationalization**: Japanese UI text with UTF-8 encoding

### Browser Compatibility
- Target: Modern browsers (Chrome, Firefox, Safari, Edge)
- Canvas API: Full HTML5 Canvas support required
- Touch Events: Mobile Safari and Chrome on Android
- CSS Features: Flexbox, CSS3 transforms, gradient backgrounds

### Performance Considerations
- Canvas rendering optimized with proper context settings (`lineCap: 'round'`)
- Event throttling through native browser optimization
- Memory management via proper event cleanup and path management
- No external dependencies to minimize load time

## Development Workflow

### Adding New Features
1. Extend the `PaintApp` class with new methods
2. Add corresponding UI elements in the toolbar section
3. Implement event listeners in `setupEventListeners()`
4. Update tool selection logic in `selectTool()` if needed
5. Test across desktop and mobile browsers

### Modifying Drawing Behavior
- Canvas context properties are set in constructor and `startDrawing()`
- All drawing operations go through the `draw()` method for consistency
- Tool-specific behavior is handled via `globalCompositeOperation` switching

### UI/UX Changes
- CSS follows a component-based approach with `.tool-*`, `.canvas-*`, and `.size-*` prefixes
- Responsive breakpoints defined in media queries
- Japanese typography uses system font stack optimized for Japanese text rendering

### Testing Strategy
- Manual testing across target browsers required
- Test touch interaction on mobile devices
- Verify canvas drawing performance with various brush sizes
- Check responsive layout at different viewport sizes