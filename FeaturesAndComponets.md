# Feature & Filename Table

| **Feature**                     | **Filename / Folder**            | **Description / Notes**                                                                 |
|----------------------------------|----------------------------------|-----------------------------------------------------------------------------------------|
| Main HTML File                   | `index.html`                     | Core webpage using Bootstrap 5 and jQuery. Contains navbar, slider, and layout.         |
| Image Slider                     | `index.html`                     | Bootstrap Carousel inside `<div id="imageSlider">`. Autoplay, fade effect, and touch.  |
| Slider Images                    | `slider_images/slide1.jpg`       | First slider image. Stored in a separate folder.                                        |
|                                  | `slider_images/slide2.jpg`       | Second slider image.                                                                    |
|                                  | `slider_images/slide3.jpg`       | Third slider image.                                                                     |
| Navbar with Search + Dropdown    | `index.html`                     | Bootstrap navbar with search box (right-aligned), responsive with toggler.              |
| Bootstrap 5 CSS                  | CDN in `<head>`                  | Included via CDN: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css` |
| jQuery Library                   | CDN in `<head>`                  | Included via CDN: `https://code.jquery.com/jquery-3.6.0.min.js`                          |
| Bootstrap JS Bundle              | CDN before `</body>`             | Includes Bootstrap JavaScript + Popper.                                                 |
| Carousel Captions                | `index.html`                     | Overlay text on each slider image (`<div class="carousel-caption">`).                  |
| CSS Styling for Slider Height    | `index.html` (inside `<style>`)  | Ensures consistent height and image scaling via `object-fit: cover`.                    |
| Touch Swipe Support              | Built-in with Bootstrap 5        | Enabled using `data-bs-touch="true"` in the carousel.                                   |
| Caption Animation (Optional)     | `index.html` (inside `<style>`)  | Optional fade-in animation using `@keyframes`.                                          |
