import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from 'react'
export default function PaymentPage() {

    const [data, setData] = React.useState('')
    const handlePayment = async () => {
        alert('test')
        try {
            const response = await axios.get('/api/test');
            setData(response.data);
        } catch (error) {
            setData(error);
        }
    };

    return (
        <>
            {
                data ??
                <>
                    {data}
                </>
            }
            <Button colorScheme={'green'} onClick={handlePayment}>
                Ödeme Yap
            </Button>
        </>
    );
}