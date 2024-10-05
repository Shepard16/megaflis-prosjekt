import React from "react";

interface OrderCardProps {
    order: {
        id: number;
        orderNumber: string;
        comment: string;
        status: string;
    };
    onMoveOrder: (order: OrderCardProps['order']) => void; // Function to move order to next stage
}

export const OrderCard: React.FC<OrderCardProps> = ({ order, onMoveOrder }) => {
    return (
        <div>
            <p>{order.orderNumber} - {order.comment} - {order.status}</p>
            {order.status != 'Klar til utlevering' && <button onClick={() => onMoveOrder(order)}>Move to next stage</button>}
        </div>
    )

    

}

export default OrderCard;