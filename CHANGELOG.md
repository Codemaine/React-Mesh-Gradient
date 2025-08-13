# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http.keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.3.0] - 2025-08-13

### Added

- Added `loading` prop to `MeshGradientRenderer` to indicate when the gradient is loading
- Added optional loading overlay support in demo app
- Added smooth fade-in animation when gradient finishes loading

### Changed

- Updated demo site to showcase loading state and interactivity controls
- Minor styling improvements for controls and overlay

## [2.0.0] - 2025-08-13

### Added

- Added `paused` prop to pause the gradient
- Added `pauseWhenNotInView` prop to pause the gradient when it's not in view
- Added `idleTime` prop to pause the gradient after a period of inactivity

### Changed

- Redesigned render engine for efficiency
- Redesigned demo site

## [1.1.0] - 2023-04-13

### Added

- Added children prop to gradient renderer, allowing you to easily display things on top of the gradient

## [1.0.5] - 2023-04-12
 
### Changed
  
- Changed hex number representation to hex string throughout project