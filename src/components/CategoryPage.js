import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaHeart, FaStar, FaFilter } from 'react-icons/fa';
import { products, categories } from '../data/products';

const CategoryContainer = styled.div`
  min-height: 100vh;
  background: #f1f3f6;
  padding: 20px;
`;

const CategoryHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #2874f0;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  transition: background 0.3s;
  
  &:hover {
    background: rgba(40, 116, 240, 0.1);
  }
`;

const CategoryInfo = styled.div``;

const CategoryTitle = styled.h1`
  color: #333;
  margin: 0 0 5px 0;
  font-size: 28px;
`;

const CategorySubtitle = styled.p`
  color: #666;
  margin: 0;
  font-size: 14px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#2874f0' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.active ? '#1a5bb8' : '#f8f9fa'};
  }
`;

const CategoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  
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
  padding: 20px;
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
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const OriginalPrice = styled.span`
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
`;

const Discount = styled.span`
  background: #388e3c;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
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

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const AddToCartButton = styled.button`
  flex: 2;
  background: linear-gradient(135deg, #ff9f00 0%, #ff6b35 100%);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 159, 0, 0.4);
  }
`;

const WishlistButton = styled.button`
  flex: 1;
  background: ${props => props.isInWishlist 
    ? 'linear-gradient(135deg, #ff1744 0%, #e91e63 100%)' 
    : 'linear-gradient(135deg, #ff4081 0%, #f06292 100%)'};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px ${props => props.isInWishlist 
      ? 'rgba(255, 23, 68, 0.4)' 
      : 'rgba(255, 64, 129, 0.4)'};
  }
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const CategoryPage = ({ addToCart, addToWishlist, removeFromWishlist, isInWishlist }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('popularity');

  const category = categories.find(cat => cat.name.toLowerCase() === categoryName?.toLowerCase());
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === categoryName?.toLowerCase()
  );

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.currentPrice - b.currentPrice;
      case 'price-high':
        return b.currentPrice - a.currentPrice;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        const discountA = ((a.originalPrice - a.currentPrice) / a.originalPrice) * 100;
        const discountB = ((b.originalPrice - b.currentPrice) / b.originalPrice) * 100;
        return discountB - discountA;
      default:
        return 0;
    }
  });

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

  if (!category) {
    return (
      <CategoryContainer>
        <CategoryHeader>
          <HeaderLeft>
            <BackButton onClick={() => navigate('/')}>
              <FaArrowLeft />
              Back to Home
            </BackButton>
            <CategoryInfo>
              <CategoryTitle>Category Not Found</CategoryTitle>
              <CategorySubtitle>The category you're looking for doesn't exist</CategorySubtitle>
            </CategoryInfo>
          </HeaderLeft>
        </CategoryHeader>
      </CategoryContainer>
    );
  }

  return (
    <CategoryContainer>
      <CategoryHeader>
        <HeaderLeft>
          <BackButton onClick={() => navigate('/')}>
            <FaArrowLeft />
            Back to Home
          </BackButton>
          <CategoryInfo>
            <CategoryTitle>{category.icon} {category.name}</CategoryTitle>
            <CategorySubtitle>{sortedProducts.length} products available</CategorySubtitle>
          </CategoryInfo>
        </HeaderLeft>
        
        <FilterButtons>
          <FilterButton active={sortBy === 'popularity'} onClick={() => setSortBy('popularity')}>
            <FaFilter /> Popular
          </FilterButton>
          <FilterButton active={sortBy === 'price-low'} onClick={() => setSortBy('price-low')}>
            Price: Low to High
          </FilterButton>
          <FilterButton active={sortBy === 'price-high'} onClick={() => setSortBy('price-high')}>
            Price: High to Low
          </FilterButton>
          <FilterButton active={sortBy === 'rating'} onClick={() => setSortBy('rating')}>
            Top Rated
          </FilterButton>
          <FilterButton active={sortBy === 'discount'} onClick={() => setSortBy('discount')}>
            Best Deals
          </FilterButton>
        </FilterButtons>
      </CategoryHeader>
      
      <CategoryContent>
        {sortedProducts.length === 0 ? (
          <NoProducts>
            <h2>No products found in {category.name}</h2>
            <p>Check back later for new arrivals!</p>
          </NoProducts>
        ) : (
          <ProductsGrid>
            {sortedProducts.map(product => (
              <ProductCard key={product.id}>
                <ProductImage onClick={() => navigate(`/product/${product.id}`)}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    onError={e => { 
                      e.target.onerror = null; 
                      e.target.src = 'https://placehold.co/300x250?text=No+Image'; 
                    }} 
                  />
                </ProductImage>
                
                <ProductInfo>
                  <ProductTitle onClick={() => navigate(`/product/${product.id}`)}>
                    {product.name}
                  </ProductTitle>
                  
                  <ProductPrice>
                    <CurrentPrice>₹{product.currentPrice.toLocaleString()}</CurrentPrice>
                    <OriginalPrice>₹{product.originalPrice.toLocaleString()}</OriginalPrice>
                    <Discount>
                      {Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100)}% OFF
                    </Discount>
                  </ProductPrice>
                  
                  <Rating>
                    <Stars>
                      {renderStars(product.rating)}
                    </Stars>
                    <RatingText>({product.reviews.toLocaleString()})</RatingText>
                  </Rating>
                  
                  <ActionButtons>
                    <AddToCartButton onClick={() => addToCart(product)}>
                      <FaShoppingCart />
                      Add to Cart
                    </AddToCartButton>
                    
                    <WishlistButton 
                      isInWishlist={isInWishlist(product.id)}
                      onClick={() => handleWishlistToggle(product)}
                    >
                      <FaHeart />
                    </WishlistButton>
                  </ActionButtons>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductsGrid>
        )}
      </CategoryContent>
    </CategoryContainer>
  );
};

export default CategoryPage;
