import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCreditCard, FaTruck, FaShieldAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CheckoutContainer = styled.div`
  min-height: 100vh;
  background: #f1f3f6;
  padding: 20px;
`;

const CheckoutHeader = styled.div`
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

const CheckoutTitle = styled.h1`
  color: #333;
  margin: 0;
  font-size: 24px;
`;

const CheckoutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutForm = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Section = styled.div`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 20px 0;
  color: #333;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #2874f0;
  }
  
  &.error {
    border-color: #ff4444;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #2874f0;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentOption = styled.div`
  border: 1px solid ${props => props.selected ? '#2874f0' : '#ddd'};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s;
  background: ${props => props.selected ? '#f0f7ff' : 'white'};
  
  &:hover {
    border-color: #2874f0;
  }
`;

const PaymentTitle = styled.div`
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const PaymentDescription = styled.div`
  font-size: 14px;
  color: #666;
`;

const OrderSummary = styled.div`
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

const OrderItem = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  color: #666;
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

const PlaceOrderButton = styled.button`
  width: 100%;
  background: #fb641b;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.3s;
  
  &:hover {
    background: #e55a17;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Checkout = ({ cart, user, placeOrder }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [isLoading, setIsLoading] = useState(false);

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const delivery = subtotal > 500 ? 0 : 40;
    const tax = Math.round(subtotal * 0.18); // 18% GST
    return subtotal + delivery + tax;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    const required = ['firstName', 'lastName', 'phone', 'address', 'city', 'state', 'pincode'];
    const missing = required.filter(field => !formData[field]);
    
    if (missing.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderData = {
        items: cart,
        shippingAddress: formData,
        total: calculateTotal(),
        paymentMethod: formData.paymentMethod
      };

      const order = placeOrder(orderData);
      
      toast.success('Order placed successfully!');
      navigate('/orders');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <CheckoutContainer>
        <CheckoutHeader>
          <BackButton onClick={() => navigate('/cart')}>
            <FaArrowLeft />
            Back to Cart
          </BackButton>
          <CheckoutTitle>Checkout</CheckoutTitle>
        </CheckoutHeader>
        
        <div style={{ textAlign: 'center', padding: '50px', background: 'white', borderRadius: '8px' }}>
          <h2>Your cart is empty</h2>
          <p>Add items to your cart before proceeding to checkout.</p>
          <button 
            onClick={() => navigate('/')}
            style={{
              background: '#2874f0',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <BackButton onClick={() => navigate('/cart')}>
          <FaArrowLeft />
          Back to Cart
        </BackButton>
        <CheckoutTitle>Checkout</CheckoutTitle>
      </CheckoutHeader>
      
      <CheckoutContent>
        <CheckoutForm>
          <form onSubmit={handleSubmit}>
            <Section>
              <SectionTitle>
                <FaTruck />
                Shipping Information
              </SectionTitle>
              
              <FormRow>
                <FormGroup>
                  <Label>First Name *</Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Last Name *</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!!user?.email}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Phone Number *</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label>Address *</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <Label>City *</Label>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>State *</Label>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Delhi</option>
                    {/* Add more states as needed */}
                  </Select>
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label>PIN Code *</Label>
                <Input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  maxLength="6"
                  required
                />
              </FormGroup>
            </Section>
            
            <Section>
              <SectionTitle>
                <FaCreditCard />
                Payment Method
              </SectionTitle>
              
              <PaymentOption 
                selected={formData.paymentMethod === 'cod'}
                onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cod' }))}
              >
                <PaymentTitle>Cash on Delivery</PaymentTitle>
                <PaymentDescription>Pay when you receive your order</PaymentDescription>
              </PaymentOption>
              
              <PaymentOption 
                selected={formData.paymentMethod === 'card'}
                onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
              >
                <PaymentTitle>Credit/Debit Card</PaymentTitle>
                <PaymentDescription>Pay securely with your card</PaymentDescription>
              </PaymentOption>
              
              <PaymentOption 
                selected={formData.paymentMethod === 'upi'}
                onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'upi' }))}
              >
                <PaymentTitle>UPI</PaymentTitle>
                <PaymentDescription>Pay with Google Pay, PhonePe, Paytm</PaymentDescription>
              </PaymentOption>
            </Section>
          </form>
        </CheckoutForm>
        
        <OrderSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          
          {cart.map(item => (
            <OrderItem key={item.id}>
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
                <ItemPrice>₹{item.currentPrice.toLocaleString()} × {item.quantity}</ItemPrice>
              </ItemDetails>
            </OrderItem>
          ))}
          
          <Divider />
          
          <SummaryRow>
            <SummaryLabel>Subtotal ({cart.length} items)</SummaryLabel>
            <SummaryValue>₹{calculateSubtotal().toLocaleString()}</SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>Delivery Charges</SummaryLabel>
            <SummaryValue>
              {calculateSubtotal() > 500 ? 'FREE' : '₹40'}
            </SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>Tax (GST 18%)</SummaryLabel>
            <SummaryValue>₹{Math.round(calculateSubtotal() * 0.18).toLocaleString()}</SummaryValue>
          </SummaryRow>
          
          <Divider />
          
          <SummaryRow>
            <SummaryLabel>Total Amount</SummaryLabel>
            <SummaryValue bold>₹{calculateTotal().toLocaleString()}</SummaryValue>
          </SummaryRow>
          
          <PlaceOrderButton 
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Placing Order...' : 'Place Order'}
          </PlaceOrderButton>
        </OrderSummary>
      </CheckoutContent>
    </CheckoutContainer>
  );
};

export default Checkout;
