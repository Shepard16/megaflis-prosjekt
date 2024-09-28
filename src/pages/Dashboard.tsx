import { stat } from "fs";
import React, { useState, useEffect } from "react";
import { OrderCard } from "../components/OrderCard";


const Dashboard: React.FC = () => {
    const [orders, setOrders] = useState([
        { orderNumber: '0000P122100006549', status: 'TilPakking' },
        { orderNumber: '0000P122100006550', status: 'KlarTilUtlevering' }
    ])};

    