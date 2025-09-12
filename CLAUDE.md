# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kork is a simple HTML/CSS prototype website for Kringkastingsorkestret. This is a vanilla HTML/CSS project with no build process, dependencies, or frameworks.

## Project Structure

- `index.html` - Main homepage with basic header and content structure
- `styles.css` - Vanilla CSS with modern styling including flexbox, shadows, and responsive design
- `README.md` - Project documentation

## Development Workflow

### Running the Site
- Open `index.html` directly in a web browser - no server or build process required
- For development with live reload, any simple HTTP server can be used (e.g., `python -m http.server 8000`)

### Code Style
- HTML follows semantic structure with proper DOCTYPE and meta tags
- CSS uses modern reset (`* { box-sizing: border-box }`) and follows BEM-like conventions
- Color scheme uses professional colors: dark blue header (#2c3e50), light background (#f4f4f4)
- Typography uses Arial fallback with consistent spacing (2rem, 1rem units)

## Architecture Notes

This is a static prototype website with:
- Simple semantic HTML structure (header, main)
- Responsive CSS with max-width container (1200px)
- Professional styling with shadows and rounded corners
- No JavaScript, frameworks, or build tools

When making changes, maintain the existing simple structure and professional aesthetic.