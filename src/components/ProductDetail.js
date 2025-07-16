import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaHeart, FaStar, FaMinus, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { products } from '../data/products';

const DetailContainer = styled.div`
  min-height: 100vh;
  background: #f1f3f6;
  padding: 20px;
`;

const DetailHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 20px;
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

const DetailContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ImageSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ProductImage = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const InfoSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ProductTitle = styled.h1`
  margin: 0 0 15px 0;
  font-size: 28px;
  color: #333;
  line-height: 1.3;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const CurrentPrice = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #333;
`;

const OriginalPrice = styled.span`
  font-size: 20px;
  color: #999;
  text-decoration: line-through;
`;

const Discount = styled.span`
  background: #388e3c;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled(FaStar)`
  color: ${props => props.filled ? '#ffc107' : '#ddd'};
  font-size: 16px;
`;

const RatingText = styled.span`
  font-size: 16px;
  color: #666;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const QuantityLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
`;

const QuantityButton = styled.button`
  background: #f8f9fa;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #e9ecef;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  min-width: 40px;
  text-align: center;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const AddToCartButton = styled.button`
  flex: 2;
  background: #ff9f00;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.3s;
  
  &:hover {
    background: #e68900;
  }
`;

const WishlistButton = styled.button`
  flex: 1;
  background: ${props => props.isInWishlist ? '#ff1744' : '#ff4081'};
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.3s;
  
  &:hover {
    background: ${props => props.isInWishlist ? '#c51162' : '#e91e63'};
  }
`;

const Features = styled.div`
  margin-bottom: 30px;
`;

const FeaturesTitle = styled.h3`
  margin: 0 0 15px 0;
  font-size: 18px;
  color: #333;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  padding: 8px 0;
  color: #666;
  border-bottom: 1px solid #f0f0f0;
  
  &:before {
    content: '✓';
    color: #388e3c;
    font-weight: bold;
    margin-right: 10px;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const CustomerFeedback = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FeedbackTitle = styled.h3`
  margin: 0 0 20px 0;
  color: #333;
  font-size: 20px;
`;

const ReviewCard = styled.div`
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 15px;
  background: #f8f9fa;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ReviewUser = styled.span`
  font-weight: bold;
  color: #333;
`;

const ReviewRating = styled.div`
  display: flex;
  gap: 2px;
`;

const ReviewComment = styled.p`
  margin: 0;
  color: #666;
  font-style: italic;
  line-height: 1.5;
`;

const ProductDetail = ({ addToCart, addToWishlist, removeFromWishlist, isInWishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Find product by ID - in real app, this would be an API call
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <DetailContainer>
        <DetailHeader>
          <BackButton onClick={() => navigate('/')}>
            <FaArrowLeft />
            Back to Home
          </BackButton>
        </DetailHeader>
        <div style={{ textAlign: 'center', padding: '50px', background: 'white', borderRadius: '8px' }}>
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </DetailContainer>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} filled={i < Math.floor(rating)} />
    ));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <DetailContainer>
      <DetailHeader>
        <BackButton onClick={() => navigate('/')}>
          <FaArrowLeft />
          Back to Home
        </BackButton>
      </DetailHeader>
      
      <DetailContent>
        <ImageSection>
          <ProductImage>
            <img 
              src={product.image} 
              alt={product.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/400x400?text=No+Image';
              }}
            />
          </ProductImage>
        </ImageSection>
        
        <InfoSection>
          <ProductTitle>{product.name}</ProductTitle>
          
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
            <RatingText>{product.rating} ({product.reviews.toLocaleString()} reviews)</RatingText>
          </Rating>
          
          <Description>{product.description}</Description>
          
          <QuantitySelector>
            <QuantityLabel>Quantity:</QuantityLabel>
            <QuantityControls>
              <QuantityButton 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <FaMinus />
              </QuantityButton>
              <Quantity>{quantity}</Quantity>
              <QuantityButton onClick={() => setQuantity(quantity + 1)}>
                <FaPlus />
              </QuantityButton>
            </QuantityControls>
          </QuantitySelector>
          
          <ActionButtons>
            <AddToCartButton onClick={handleAddToCart}>
              <FaShoppingCart />
              Add to Cart
            </AddToCartButton>
            
            <WishlistButton 
              isInWishlist={isInWishlist(product.id)}
              onClick={handleWishlistToggle}
            >
              <FaHeart />
              {isInWishlist(product.id) ? 'Remove' : 'Wishlist'}
            </WishlistButton>
          </ActionButtons>
          
          {product.features && (
            <Features>
              <FeaturesTitle>Key Features</FeaturesTitle>
              <FeaturesList>
                {product.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
            </Features>
          )}
          
          {product.feedback && (
            <CustomerFeedback>
              <FeedbackTitle>Customer Reviews</FeedbackTitle>
              {product.feedback.map((review, index) => (
                <ReviewCard key={index}>
                  <ReviewHeader>
                    <ReviewUser>{review.user}</ReviewUser>
                    <ReviewRating>
                      {renderStars(review.rating)}
                    </ReviewRating>
                  </ReviewHeader>
                  <ReviewComment>"{review.comment}"</ReviewComment>
                </ReviewCard>
              ))}
            </CustomerFeedback>
          )}

          <CustomerFeedback>
            <FeedbackTitle>Customer Feedback</FeedbackTitle>
            {product.reviewsData && product.reviewsData.length > 0 ? (
              product.reviewsData.map((review, index) => (
                <ReviewCard key={index}>
                  <ReviewHeader>
                    <ReviewUser>{review.user}</ReviewUser>
                    <ReviewRating>
                      {renderStars(review.rating)}
                    </ReviewRating>
                  </ReviewHeader>
                  <ReviewComment>"{review.comment}"</ReviewComment>
                </ReviewCard>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#999' }}>No reviews yet.</p>
            )}
          </CustomerFeedback>
        </InfoSection>
      </DetailContent>
    </DetailContainer>
  );
};

export default ProductDetail;
