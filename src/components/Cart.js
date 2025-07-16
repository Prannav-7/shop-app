import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartContainer = styled.div`
  min-height: 100vh;
  background: #f1f3f6;
  padding: 20px;
`;

const CartHeader = styled.div`
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

const CartTitle = styled.h1`
  color: #333;
  margin: 0;
  font-size: 24px;
`;

const CartContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
`;

const EmptyCartIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

const EmptyCartText = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
`;

const EmptyCartSubtext = styled.p`
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

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 10px;
  }
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ItemDetails = styled.div`
  @media (max-width: 768px) {
    grid-column: 2;
  }
`;

const ItemName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #333;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const CurrentPrice = styled.span`
  font-size: 16px;
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

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    grid-column: 2;
    margin-top: 10px;
  }
`;

const QuantityButton = styled.button`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 1px solid #ddd;
  width: 35px;
  height: 35px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  &:hover {
    background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(255, 68, 68, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 68, 68, 0.4);
    background: linear-gradient(135deg, #cc0000 0%, #990000 100%);
  }
  
  @media (max-width: 768px) {
    grid-column: 2;
    margin-top: 10px;
    width: fit-content;
  }
`;

const CartSummary = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: fit-content;
  position: sticky;
  top: 20px;
`;

const SummaryTitle = styled.h2`
  margin: 0 0 20px 0;
  color: #333;
  font-size: 18px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
`;

const SummaryLabel = styled.span`
  color: #666;
`;

const SummaryValue = styled.span`
  color: #333;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 15px 0;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #fb641b 0%, #ff9f00 100%);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(251, 100, 27, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(251, 100, 27, 0.4);
    background: linear-gradient(135deg, #e55a17 0%, #e68900 100%);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Cart = ({ cart, updateCartQuantity, removeFromCart, clearCart }) => {
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
  };

  const calculateDiscount = () => {
    return cart.reduce((sum, item) => {
      const itemDiscount = (item.originalPrice - item.currentPrice) * item.quantity;
      return sum + itemDiscount;
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const delivery = subtotal > 500 ? 0 : 40;
    return subtotal + delivery;
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <CartContainer>
        <CartHeader>
          <BackButton onClick={() => navigate('/')}>
            <FaArrowLeft />
            Back to Shopping
          </BackButton>
          <CartTitle>Shopping Cart</CartTitle>
        </CartHeader>
        
        <CartContent>
          <CartItems>
            <EmptyCart>
              <EmptyCartIcon>🛒</EmptyCartIcon>
              <EmptyCartText>Your cart is empty</EmptyCartText>
              <EmptyCartSubtext>Add items to your cart to see them here</EmptyCartSubtext>
              <ContinueShoppingButton onClick={() => navigate('/')}>
                Continue Shopping
              </ContinueShoppingButton>
            </EmptyCart>
          </CartItems>
        </CartContent>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartHeader>
        <BackButton onClick={() => navigate('/')}>
          <FaArrowLeft />
          Back to Shopping
        </BackButton>
        <CartTitle>Shopping Cart ({cart.length} items)</CartTitle>
      </CartHeader>
      
      <CartContent>
        <CartItems>
                      {cart.map(item => (
              <CartItem key={item.id}>
                <ItemImage>
                  <img src={item.image} alt={item.name} />
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
                
                <QuantityControls>
                  <QuantityButton 
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                    <FaPlus />
                  </QuantityButton>
                </QuantityControls>
                
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                  Remove
                </RemoveButton>
              </ItemDetails>
            </CartItem>
          ))}
        </CartItems>
        
        <CartSummary>
          <SummaryTitle>Price Details</SummaryTitle>
          
          <SummaryRow>
            <SummaryLabel>Price ({cart.length} items)</SummaryLabel>
            <SummaryValue>₹{calculateSubtotal().toLocaleString()}</SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>Discount</SummaryLabel>
            <SummaryValue style={{ color: '#388e3c' }}>
              -₹{calculateDiscount().toLocaleString()}
            </SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>Delivery Charges</SummaryLabel>
            <SummaryValue>
              {calculateSubtotal() > 500 ? 'FREE' : '₹40'}
            </SummaryValue>
          </SummaryRow>
          
          <Divider />
          
          <SummaryRow>
            <SummaryLabel>Total Amount</SummaryLabel>
            <SummaryValue bold>₹{calculateTotal().toLocaleString()}</SummaryValue>
          </SummaryRow>
          
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#388e3c' }}>
            You will save ₹{calculateDiscount().toLocaleString()} on this order
          </div>
          
          <CheckoutButton onClick={handleCheckout}>
            PROCEED TO CHECKOUT
          </CheckoutButton>
        </CartSummary>
      </CartContent>
    </CartContainer>
  );
};

export default Cart; 