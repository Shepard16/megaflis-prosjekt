import React, { useState, useEffect } from "react";
import { OrderCard } from "../components/OrderCard";

interface Order {
    id: number;
    orderNumber: string;
    comment: string;
    status: string;
}
const Dashboard: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [orderNumber, setOrderNumber] = useState('');// State for the order number
    const [comment, setComment] = useState(''); // State for the comment

// Function to handling new order
    const addOrder = (orderNumber: string, comment: string) => {
        const newOrder: Order = {
            id: orders.length + 1, // Use the length of the orders array as the ID
            orderNumber: orderNumber,
            comment: comment,
            status: 'Ordre på vent' // Starting status
        };
        setOrders([...orders, newOrder]);

        // Clear the input fields after adding the order
        
        setOrderNumber('');
        setComment('');
};

    const moveOrderToNextStage = (order: Order) => {
        const updatedOrders = orders.map((o) => {
            if (o.id === order.id) {
                if (o.status === 'Ordre på vent') return { ...o, status: 'Til pakking' };
                if (o.status === 'Til pakking') return { ...o, status: 'Klar til utlevering' }; 
            }
            return o;
        });
        setOrders(updatedOrders);
    };

    return (
    <div>
        <h1> Admin Dashboard</h1>

        <div>
            <input 
            type="text" 
            placeholder="Order Number" 
            id="orderNumber" value={orderNumber} 
            onChange={(e) => setOrderNumber(e.target.value)} 
        />
        <input 
        type="text" 
            placeholder="Comment" 
            id="comment" value={comment} 
            onChange={(e) => setComment(e.target.value)} 
        />
            <button onClick={() => addOrder(orderNumber, comment)}>Add Order</button>
        </div>

        <h2>Ordre på vent</h2>
        {orders.filter((order) => order.status === 'Ordre på vent').map((order) => (
            <OrderCard key={order.id} order={order} onMoveOrder={moveOrderToNextStage} />
        ))}

        <h2>Klar til utlevering</h2>
        {orders.filter((order) => order.status === 'Klar til utlevering').map((order) => (
            <OrderCard key={order.id} order={order} onMoveOrder={moveOrderToNextStage} />
        ))}

    </div>
    )
};

export default Dashboard;
    