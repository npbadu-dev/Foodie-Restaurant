# Foodie - Food Delivery Website

A modern, responsive food delivery website built with HTML, CSS (Tailwind CSS), and JavaScript. The website allows users to browse food categories, view restaurants, check offers, and track orders.

## Features

- **Hero Section**: Eye-catching landing page with search functionality for delivery addresses
- **Food Categories**: Browse food by categories like Pizza, Burger, Sushi, Desserts, Drinks, Healthy, Chinese, and more
- **Best Offers**: Promotional offers including 50% off first order, 20% off on orders above $20, and free delivery on orders above $30
- **Popular Restaurants**: Featured restaurants with ratings, delivery times, and pricing
- **Mobile App Section**: Download links for Play Store and App Store
- **Customer Reviews**: Testimonials from satisfied customers
- **Newsletter Subscription**: Stay updated with latest offers
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## Pages

- **Home** (`index.html`): Main landing page with all sections
- **Orders** (`section/orders.html`): Food categories and ordering interface
- **Restaurants** (`section/restaurants.html`): List of available restaurants
- **Offers** (`section/offers.html`): Current promotions and discounts
- **Track Order** (`section/track.html`): Order tracking functionality

## Technologies Used

- **HTML5**: Semantic markup for structure
- **Tailwind CSS v4**: Utility-first CSS framework for styling
- **JavaScript**: Interactive navigation and UI enhancements
- **Font Awesome**: Icons for visual elements
- **Google Fonts (Inter)**: Modern typography

## Project Structure

```
food-restaurant/
├── index.html                 # Main homepage
├── package.json              # Project dependencies
├── package-lock.json         # Lock file for dependencies
├── project-image/            # Static assets (images, logos)
│   ├── logo.png
│   ├── hero section/
│   ├── food-category/
│   └── ...
├── section/                  # Additional pages
│   ├── orders.html
│   ├── orders.css
│   ├── restaurants.html
│   ├── offers.html
│   ├── track.html
│   └── ...
└── src/                      # Source files
    ├── input.css             # Tailwind input file
    ├── output.css            # Compiled Tailwind CSS
    ├── script.js             # JavaScript functionality
    └── *.css                 # Component-specific styles
```

## Getting Started

### Prerequisites

- Node.js (for npm package management)
- A web browser

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd food-restaurant
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the CSS:

   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css
   ```

   For development with auto-reload:

   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
   ```

### Running the Application

Since this is a static website, you can open `index.html` directly in your browser. For a better development experience, serve it with a local server:

#### Option 1: Using Python (if available)

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

#### Option 2: Using Node.js live-server (install globally first)

```bash
npm install -g live-server
live-server
```

#### Option 3: Using VS Code Live Server extension

- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## Development

- The project uses Tailwind CSS for styling. Modify `src/input.css` and rebuild to see changes.
- JavaScript functionality is in `src/script.js` for navigation highlighting.
- Each section has its own HTML file in the `section/` directory.
- Images and assets are stored in `project-image/`.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please reach out to the project maintainer.

---

**Foodie** - Delicious food, delivered fast to your doorstep! 🍕🚀</content>
<parameter name="filePath">/home/nitesh/Desktop/food-restaurant/README.md
