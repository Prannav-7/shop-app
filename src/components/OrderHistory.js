import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaBox, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OrderHistoryContainer = styled.div`
  min-height: 100vh;
  background: #f1f3f6;
  padding: 20px;
`;

const OrderHistoryHeader = styled.div`
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

const OrderHistoryTitle = styled.h1`
  color: #333;
  margin: 0;
  font-size: 24px;
`;

const OrderHistoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const EmptyOrders = styled.div`
  background: white;
  border-radius: 8px;
  padding: 60px 20px;
  text-align: center;
  color: #666;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const EmptyOrdersIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

const EmptyOrdersText = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
`;

const EmptyOrdersSubtext = styled.p`
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

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const OrderId = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const OrderDate = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const OrderStatus = styled.div`
  background: ${props => {
    switch (props.status) {
      case 'Confirmed': return '#e8f5e8';
      case 'Shipped': return '#e3f2fd';
      case 'Delivered': return '#e8f5e8';
      case 'Cancelled': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Confirmed': return '#2e7d32';
      case 'Shipped': return '#1976d2';
      case 'Delivered': return '#2e7d32';
      case 'Cancelled': return '#d32f2f';
      default: return '#666';
    }
  }};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const OrderItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  background: #f8f9fa;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  font-weight: 500;
`;

const ItemMeta = styled.div`
  font-size: 12px;
  color: #666;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  text-align: right;
`;

const OrderSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
`;

const OrderTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const OrderActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: ${props => props.primary ? '#2874f0' : 'white'};
  color: ${props => props.primary ? 'white' : '#2874f0'};
  border: 1px solid #2874f0;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.primary ? '#1a5bb8' : '#f0f7ff'};
  }
`;

const OrderHistory = ({ orders }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleReorder = (order) => {
    // Add all items from the order back to cart
    order.items.forEach(item => {
      // This would call addToCart for each item
      console.log('Reordering:', item.name);
    });
    navigate('/');
  };

  if (!orders || orders.length === 0) {
    return (
      <OrderHistoryContainer>
        <OrderHistoryHeader>
          <BackButton onClick={() => navigate('/')}>
            <FaArrowLeft />
            Back to Home
          </BackButton>
          <OrderHistoryTitle>My Orders</OrderHistoryTitle>
        </OrderHistoryHeader>
        
        <OrderHistoryContent>
          <EmptyOrders>
            <EmptyOrdersIcon>📦</EmptyOrdersIcon>
            <EmptyOrdersText>No orders yet</EmptyOrdersText>
            <EmptyOrdersSubtext>When you place orders, they will appear here</EmptyOrdersSubtext>
            <ContinueShoppingButton onClick={() => navigate('/')}>
              Start Shopping
            </ContinueShoppingButton>
          </EmptyOrders>
        </OrderHistoryContent>
      </OrderHistoryContainer>
    );
  }

  return (
    <OrderHistoryContainer>
      <OrderHistoryHeader>
        <BackButton onClick={() => navigate('/')}>
          <FaArrowLeft />
          Back to Home
        </BackButton>
        <OrderHistoryTitle>My Orders ({orders.length})</OrderHistoryTitle>
      </OrderHistoryHeader>
      
      <OrderHistoryContent>
        <OrderList>
          {orders.map(order => (
            <OrderCard key={order.id}>
              <OrderHeader>
                <OrderInfo>
                  <OrderId>Order #{order.id}</OrderId>
                  <OrderDate>
                    <FaCalendarAlt />
                    Placed on {formatDate(order.date)}
                  </OrderDate>
                </OrderInfo>
                <OrderStatus status={order.status}>
                  {order.status}
                </OrderStatus>
              </OrderHeader>
              
              <OrderItems>
                {order.items.map((item, index) => (
                  <OrderItem key={`${order.id}-${item.id}-${index}`}>
                    <ItemImage 
                      src={item.image} 
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/60x60?text=No+Image';
                      }}
                    />
                    <ItemDetails>
                      <ItemName>{item.name}</ItemName>
                      <ItemMeta>Qty: {item.quantity}</ItemMeta>
                    </ItemDetails>
                    <ItemPrice>₹{(item.currentPrice * item.quantity).toLocaleString()}</ItemPrice>
                  </OrderItem>
                ))}
              </OrderItems>
              
              <OrderSummary>
                <OrderTotal>
                  <FaRupeeSign />
                  {order.total.toLocaleString()}
                </OrderTotal>
                
                <OrderActions>
                  <ActionButton onClick={() => handleReorder(order)}>
                    Buy Again
                  </ActionButton>
                  <ActionButton primary>
                    Track Order
                  </ActionButton>
                </OrderActions>
              </OrderSummary>
            </OrderCard>
          ))}
        </OrderList>
      </OrderHistoryContent>
    </OrderHistoryContainer>
  );
};

export default OrderHistory;
