# ShopHub - E-commerce Application

A modern, responsive e-commerce application built with React, featuring user authentication, product browsing, shopping cart functionality, and an attractive Flipkart-like interface.

## Features

### 🔐 Authentication System
- **Login Page**: Email and password validation with real-time error handling
- **Signup Page**: User registration with password strength indicator and email validation
- **Protected Routes**: Only authenticated users can access the main application
- **Session Management**: Persistent login state using localStorage

### 🛍️ E-commerce Features
- **Attractive Home Page**: Flipkart-inspired design with modern UI/UX
- **Product Categories**: Browse products by category (Electronics, Fashion, Home, etc.)
- **Product Search**: Real-time search functionality
- **Product Filtering**: Sort by popularity, price (low to high/high to low), and customer rating
- **Product Cards**: Display product images, prices, discounts, ratings, and reviews
- **Shopping Cart**: Add/remove items, update quantities, view cart summary
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional interface with smooth animations
- **Toast Notifications**: User feedback for actions like adding to cart, login success, etc.
- **Loading States**: Visual feedback during form submissions
- **Hover Effects**: Interactive elements with smooth transitions
- **Color-coded Categories**: Each product category has its own color theme

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to the client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install additional required packages:**
   ```bash
   npm install react-router-dom axios formik yup react-icons react-toastify styled-components
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage Guide

### Getting Started
1. **First Visit**: You'll be redirected to the login page
2. **Create Account**: Click "Sign up" to create a new account
3. **Login**: Use your email and password to log in
4. **Browse Products**: Explore products by category or use the search bar
5. **Add to Cart**: Click "Add to Cart" on any product
6. **View Cart**: Click the cart icon in the header to view your cart
7. **Checkout**: Review your cart and click "PLACE ORDER" to complete purchase

### Features in Detail

#### Authentication
- **Email Validation**: Real-time email format validation
- **Password Requirements**: Minimum 6 characters with strength indicator
- **Form Validation**: Comprehensive error handling and user feedback
- **Session Persistence**: Stay logged in across browser sessions

#### Product Browsing
- **Category Filtering**: Click on category icons to filter products
- **Search**: Type in the search bar to find specific products
- **Sorting Options**: 
  - Popularity (default)
  - Price: Low to High
  - Price: High to Low
  - Customer Rating

#### Shopping Cart
- **Add Items**: Click "Add to Cart" on any product
- **Quantity Management**: Increase/decrease quantities in cart
- **Remove Items**: Remove items completely from cart
- **Price Calculation**: Automatic calculation of subtotal, discounts, and delivery charges
- **Free Delivery**: Orders above ₹500 qualify for free delivery

## Project Structure

```
client/src/
├── components/
│   ├── auth/
│   │   ├── Login.js          # Login component with validation
│   │   └── Signup.js         # Signup component with validation
│   ├── Home.js               # Main home page with products
│   └── Cart.js               # Shopping cart component
├── App.js                    # Main app component with routing
└── index.js                  # Application entry point
```

## Technologies Used

- **React 19**: Modern React with hooks and functional components
- **React Router**: Client-side routing and navigation
- **Styled Components**: CSS-in-JS for component styling
- **React Icons**: Beautiful icon library
- **React Toastify**: Toast notification system
- **Formik & Yup**: Form handling and validation
- **LocalStorage**: Client-side data persistence

## Demo Credentials

For testing purposes, you can use any valid email format and password with at least 6 characters:

- **Email**: `user@example.com`
- **Password**: `password123`

## Features to Add (Future Enhancements)

- [ ] Backend API integration
- [ ] Real product images and data
- [ ] User profile management
- [ ] Order history
- [ ] Payment gateway integration
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Admin panel
- [ ] Real-time inventory management
- [ ] Email verification system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue in the repository or contact the development team.

---

**Happy Shopping! 🛒✨**
