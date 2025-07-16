import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaShoppingCart, FaUser, FaHeart, FaStar, FaFilter } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { products, fallbackImg } from '../data/products';

// Get top 4 selling products for marquee (reduced from 6)
const topSellingProducts = products
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 4);

const categories = [
  { id: 1, name: 'Electronics', color: '#0066cc', icon: '📱' },
  { id: 2, name: 'Fashion', color: '#ff6161', icon: '👗' },
  { id: 3, name: 'Home', color: '#2874f0', icon: '🏠' },
  { id: 4, name: 'Sports', color: '#ff9f00', icon: '⚽' },
  { id: 5, name: 'Books', color: '#0066cc', icon: '📚' },
];

// Styled Components
const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  
  &:before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
    z-index: 1;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.h1`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  font-family: 'Arial', sans-serif;
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 20px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255,255,255,0.3);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #2874f0;
  cursor: pointer;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const CartBadge = styled.span`
  background: #ff4444;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 5px;
`;

const WishlistBadge = styled.span`
  background: #ff4081;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 5px;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 42px;
  font-weight: bold;
  margin: 0 0 15px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const HeroSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin: 0 0 25px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButton = styled.button`
  background: linear-gradient(135deg, #ff6b35 0%, #ff9f00 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
  }
`;

const CategoriesSection = styled.section`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SectionTitle = styled.h2`
  margin: 0 0 20px 0;
  color: #333;
  font-size: 20px;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
`;

const CategoryCard = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
  }
`;

const CategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.color || '#2874f0'};
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  overflow: hidden;
  
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const CategoryName = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

const ProductsSection = styled.section`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FiltersBar = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 
    'linear-gradient(135deg, #2874f0 0%, #1a5bb8 100%)' : 
    'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.3)'};
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    background: ${props => props.active ? 
      'linear-gradient(135deg, #1a5bb8 0%, #0d47a1 100%)' : 
      'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)'};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  justify-items: center;
`;

const ProductCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background: ${props => props.color || '#f8f9fa'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
  line-height: 1.4;
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: #2874f0;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const CurrentPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const OriginalPrice = styled.span`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
`;

const Discount = styled.span`
  background: #388e3c;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled(FaStar)`
  color: ${props => props.filled ? '#ffc107' : '#ddd'};
  font-size: 14px;
`;

const RatingText = styled.span`
  font-size: 14px;
  color: #666;
`;

const AddToCartButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ff9f00 0%, #ff6b35 100%);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  box-shadow: 0 4px 15px rgba(255, 159, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 159, 0, 0.4);
    background: linear-gradient(135deg, #e68900 0%, #e55a2b 100%);
  }
`;

const WishlistButton = styled.button`
  width: 100%;
  background: ${props => props.isInWishlist ? 
    'linear-gradient(135deg, #ff1744 0%, #f50057 100%)' : 
    'linear-gradient(135deg, #ff4081 0%, #e91e63 100%)'};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: 8px;
  box-shadow: 0 4px 15px ${props => props.isInWishlist ? 
    'rgba(255, 23, 68, 0.3)' : 
    'rgba(255, 64, 129, 0.3)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.isInWishlist ? 
      'rgba(255, 23, 68, 0.4)' : 
      'rgba(255, 64, 129, 0.4)'};
  }
`;

const TopSellingSection = styled.section`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 20px 0;
`;

const MarqueeContent = styled.div`
  display: inline-flex;
  animation: marquee 30s linear infinite;
  gap: 20px;
  
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const MarqueeCard = styled.div`
  min-width: 250px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }
`;

const MarqueeImage = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SalesBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff9f00 100%);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
`;

const MarqueeInfo = styled.div`
  padding: 15px;
`;

const MarqueeTitle = styled.h4`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #333;
  white-space: normal;
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const MarqueePrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ff6b35;
  margin-bottom: 5px;
`;

const MarqueeRating = styled.div`
  font-size: 14px;
  color: #666;
`;

const Footer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  margin-top: 50px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  margin: 0 0 20px 0;
  color: #ecf0f1;
  font-size: 18px;
  font-weight: bold;
`;

const FooterText = styled.p`
  margin: 0;
  color: #bdc3c7;
  line-height: 1.6;
`;

const FooterLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SocialLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding: 20px;
  text-align: center;
`;

const FooterBottomText = styled.p`
  margin: 0;
  color: #bdc3c7;
  font-size: 14px;
`;

const Home = ({ user, onLogout, cart, addToCart, wishlist, addToWishlist, removeFromWishlist, isInWishlist }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('popularity');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.currentPrice - b.currentPrice;
      case 'price-high':
        return b.currentPrice - a.currentPrice;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  }).slice(0, 8); // Show only 8 products maximum on home page

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} filled={i < Math.floor(rating)} />
    ));
  };

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <HomeContainer>
      <Header>
        <HeaderContent>
          <Logo>ShopHub</Logo>
          
          <SearchBar>
            <SearchInput
              type="text"
              placeholder="Search for products, brands and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon />
          </SearchBar>
          
          <HeaderActions>
            <ActionButton>
              <FaUser />
              {user ? user.email : 'Login'}
            </ActionButton>
            <ActionButton onClick={() => navigate('/wishlist')}>
              <FaHeart />
              Wishlist
              {wishlist.length > 0 && <WishlistBadge>{wishlist.length}</WishlistBadge>}
            </ActionButton>
            <ActionButton onClick={() => navigate('/cart')}>
              <FaShoppingCart />
              Cart
              {cart.length > 0 && <CartBadge>{cart.reduce((sum, item) => sum + item.quantity, 0)}</CartBadge>}
            </ActionButton>
            {user && (
              <ActionButton onClick={onLogout}>
                Logout
              </ActionButton>
            )}
          </HeaderActions>
        </HeaderContent>
      </Header>

      <MainContent>
        <HeroSection>
          <HeroTitle>Welcome to ShopHub</HeroTitle>
          <HeroSubtitle>Discover amazing products at unbeatable prices. Shop the latest trends and find everything you need in one place.</HeroSubtitle>
          <HeroButton onClick={() => document.querySelector('#products-section').scrollIntoView({ behavior: 'smooth' })}>
            Shop Now
          </HeroButton>
        </HeroSection>

        <TopSellingSection>
          <SectionTitle>🔥 Top Selling Products</SectionTitle>
          <MarqueeContainer>
            <MarqueeContent>
              {[...topSellingProducts, ...topSellingProducts].map((product, index) => (
                <MarqueeCard key={`${product.id}-${index}`} onClick={() => navigate(`/product/${product.id}`)}>
                  <MarqueeImage>
                    <img src={product.image} alt={product.name} onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }} />
                    <SalesBadge>🔥 Hot Sale</SalesBadge>
                  </MarqueeImage>
                  <MarqueeInfo>
                    <MarqueeTitle>{product.name}</MarqueeTitle>
                    <MarqueePrice>₹{product.currentPrice.toLocaleString()}</MarqueePrice>
                    <MarqueeRating>⭐ {product.rating}</MarqueeRating>
                  </MarqueeInfo>
                </MarqueeCard>
              ))}
            </MarqueeContent>
          </MarqueeContainer>
        </TopSellingSection>

        <CategoriesSection>
          <SectionTitle>Shop by Category</SectionTitle>
          <CategoriesGrid>
            <CategoryCard onClick={() => setSelectedCategory('All')}>
              <CategoryIcon color="#2874f0">🏪</CategoryIcon>
              <CategoryName>All</CategoryName>
            </CategoryCard>
            {categories.map(category => (
              <CategoryCard key={category.id} onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}>
                <CategoryIcon color={category.color}>{category.icon}</CategoryIcon>
                <CategoryName>{category.name}</CategoryName>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </CategoriesSection>

        <ProductsSection id="products-section">
          <FiltersBar>
            <FilterButton active={sortBy === 'popularity'} onClick={() => setSortBy('popularity')}>
              <FaFilter /> Popularity
            </FilterButton>
            <FilterButton active={sortBy === 'price-low'} onClick={() => setSortBy('price-low')}>
              Price: Low to High
            </FilterButton>
            <FilterButton active={sortBy === 'price-high'} onClick={() => setSortBy('price-high')}>
              Price: High to Low
            </FilterButton>
            <FilterButton active={sortBy === 'rating'} onClick={() => setSortBy('rating')}>
              Customer Rating
            </FilterButton>
          </FiltersBar>

          <ProductsGrid>
            {sortedProducts.map(product => (
              <ProductCard key={product.id}>
                <ProductImage onClick={() => navigate(`/product/${product.id}`)}>
                  <img src={product.image} alt={product.name} onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }} />
                </ProductImage>
                <ProductInfo>
                  <ProductTitle onClick={() => navigate(`/product/${product.id}`)}>{product.name}</ProductTitle>
                  <ProductPrice>
                    <CurrentPrice>₹{product.currentPrice.toLocaleString()}</CurrentPrice>
                    <OriginalPrice>₹{product.originalPrice.toLocaleString()}</OriginalPrice>
                    <Discount>{Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100)}% OFF</Discount>
                  </ProductPrice>
                  <Rating>
                    <Stars>
                      {renderStars(product.rating)}
                    </Stars>
                    <RatingText>({product.reviews})</RatingText>
                  </Rating>
                  <AddToCartButton onClick={() => addToCart(product)}>
                    Add to Cart
                  </AddToCartButton>
                  <WishlistButton 
                    isInWishlist={isInWishlist(product.id)}
                    onClick={() => handleWishlistToggle(product)}
                  >
                    {isInWishlist(product.id) ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
                  </WishlistButton>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductsGrid>
        </ProductsSection>
      </MainContent>
      
      <Footer>
        <FooterContent>
          <FooterSection>
            <FooterTitle>About ShopHub</FooterTitle>
            <FooterText>
              Your one-stop destination for all your shopping needs. 
              Quality products at the best prices with fast delivery.
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Customer Service</FooterTitle>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>FAQ</FooterLink>
            <FooterLink>Return Policy</FooterLink>
            <FooterLink>Shipping Info</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Connect With Us</FooterTitle>
            <SocialLinks>
              <SocialLink href="mailto:support@shophub.com">
                📧 support@shophub.com
              </SocialLink>
              <SocialLink href="https://facebook.com/shophub">
                📘 Facebook
              </SocialLink>
              <SocialLink href="https://instagram.com/shophub">
                📷 Instagram
              </SocialLink>
              <SocialLink href="https://twitter.com/shophub">
                🐦 Twitter
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink onClick={() => navigate('/category/Electronics')}>Electronics</FooterLink>
            <FooterLink onClick={() => navigate('/category/Fashion')}>Fashion</FooterLink>
            <FooterLink onClick={() => navigate('/category/Home')}>Home & Kitchen</FooterLink>
            <FooterLink onClick={() => navigate('/category/Sports')}>Sports</FooterLink>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <FooterBottomText>
            © 2025 ShopHub. All rights reserved. | Made with ❤️ for awesome shopping experience
          </FooterBottomText>
        </FooterBottom>
      </Footer>
    </HomeContainer>
  );
};

export default Home;