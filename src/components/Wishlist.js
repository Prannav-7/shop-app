import React from 'react';
import styled from 'styled-components';
import { FaTrash, FaShoppingCart, FaArrowLeft, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const WishlistContainer = styled.div`
  min-height: 100vh;
  background: #f1f3f6;
  padding: 20px;
`;

const WishlistHeader = styled.div`
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

const WishlistTitle = styled.h1`
  color: #333;
  margin: 0;
  font-size: 24px;
`;

const WishlistContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const EmptyWishlist = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
`;

const EmptyWishlistIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

const EmptyWishlistText = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
`;

const EmptyWishlistSubtext = styled.p`
  margin: 0 0 20px 0;
  color: #666;
`;

const ContinueShoppingButton = styled.button`
  background: #2874f0;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  
  &:hover {
    background: #1a5bb8;
  }
`;

const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const WishlistItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
`;

const ItemImage = styled.div`
  height: 200px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemDetails = styled.div`
  padding: 15px;
`;

const ItemName = styled.h3`
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
  line-height: 1.4;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
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

const ItemActions = styled.div`
  display: flex;
  gap: 10px;
`;

const AddToCartButton = styled.button`
  flex: 1;
  background: #ff9f00;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: background 0.3s;
  
  &:hover {
    background: #e68900;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  
  &:hover {
    background: #cc0000;
  }
`;

const Wishlist = ({ wishlist, removeFromWishlist, addToCart, isInCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
  };

  if (wishlist.length === 0) {
    return (
      <WishlistContainer>
        <WishlistHeader>
          <BackButton onClick={() => navigate('/')}>
            <FaArrowLeft />
            Back to Shopping
          </BackButton>
          <WishlistTitle>My Wishlist</WishlistTitle>
        </WishlistHeader>
        
        <WishlistContent>
          <EmptyWishlist>
            <EmptyWishlistIcon>💝</EmptyWishlistIcon>
            <EmptyWishlistText>Your wishlist is empty</EmptyWishlistText>
            <EmptyWishlistSubtext>Add items you love to your wishlist</EmptyWishlistSubtext>
            <ContinueShoppingButton onClick={() => navigate('/')}>
              Continue Shopping
            </ContinueShoppingButton>
          </EmptyWishlist>
        </WishlistContent>
      </WishlistContainer>
    );
  }

  return (
    <WishlistContainer>
      <WishlistHeader>
        <BackButton onClick={() => navigate('/')}>
          <FaArrowLeft />
          Back to Shopping
        </BackButton>
        <WishlistTitle>My Wishlist ({wishlist.length} items)</WishlistTitle>
      </WishlistHeader>
      
      <WishlistContent>
        <WishlistGrid>
          {wishlist.map(item => (
            <WishlistItem key={item.id}>
              <ItemImage>
                <img 
                  src={item.image} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x400?text=No+Image';
                  }}
                />
              </ItemImage>
              
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>
                  <CurrentPrice>₹{item.currentPrice.toLocaleString()}</CurrentPrice>
                  <OriginalPrice>₹{item.originalPrice.toLocaleString()}</OriginalPrice>
                  <Discount>
                    {Math.round(((item.originalPrice - item.currentPrice) / item.originalPrice) * 100)}% OFF
                  </Discount>
                </ItemPrice>
                
                <ItemActions>
                  <AddToCartButton 
                    onClick={() => handleAddToCart(item)}
                    disabled={isInCart(item.id)}
                  >
                    <FaShoppingCart />
                    {isInCart(item.id) ? 'In Cart' : 'Add to Cart'}
                  </AddToCartButton>
                  
                  <RemoveButton onClick={() => handleRemove(item.id)}>
                    <FaTrash />
                  </RemoveButton>
                </ItemActions>
              </ItemDetails>
            </WishlistItem>
          ))}
        </WishlistGrid>
      </WishlistContent>
    </WishlistContainer>
  );
};

export default Wishlist;
