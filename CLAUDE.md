# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a single-file web application for summer schedule management (`summer_schedule.html`). It's a standalone HTML file with embedded CSS and JavaScript that provides a schedule management interface in Japanese.

## Architecture

- **Frontend**: Vanilla HTML/CSS/JavaScript in a single file
- **Data Storage**: Browser localStorage for persistence
- **Styling**: Embedded CSS with responsive grid layout and gradient design
- **Functionality**: 
  - Schedule CRUD operations
  - Category-based organization (study, play, travel, hobby, family)
  - Statistics display
  - Date/time sorting

## Development

To run the application, simply open `summer_schedule.html` in a web browser. No build process or server is required.

The application uses:
- HTML5 form elements (date, time, text inputs)
- CSS Grid for responsive layout
- LocalStorage API for data persistence
- Vanilla JavaScript for DOM manipulation