import React from "react";

interface OrderCardProps {
    orderNumber: string;
    status: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ orderNumber, status }) => {
    const lastFiveDigits = orderNumber.slice(-5);

    return (
        <div className="flex flex-col justify-between w-full h-24 p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p>
                Ordre nummer: <span className="font-bold text-blue-500">{lastFiveDigits}</span>
            </p>
            <p>
                Status: <span className="font-bold">{status}</span>
            </p>
        </div>
    );

}

export default OrderCard;