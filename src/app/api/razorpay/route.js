import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount, currency = "INR", receipt } = body;

    // This is a mocked Razorpay order creation response
    const mockOrder = {
      id: `order_${Math.random().toString(36).substr(2, 9)}`,
      entity: "order",
      amount: amount * 100, // Razorpay expects amount in paise
      amount_paid: 0,
      amount_due: amount * 100,
      currency,
      receipt: receipt || "receipt_mock_123",
      status: "created",
      attempts: 0,
      created_at: Math.floor(Date.now() / 1000)
    };

    // In a real application, you would use razorpay.orders.create(options)
    // and return the actual order

    return NextResponse.json(mockOrder);
  } catch (error) {
    console.error("Error creating mock Razorpay order:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
