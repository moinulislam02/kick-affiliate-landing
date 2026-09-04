import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, email, storeUrl, monthlyRevenue } = body;

    // Basic manual validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ error: 'Name is required and must be a valid string' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }
    if (!storeUrl || typeof storeUrl !== 'string' || storeUrl.trim() === '') {
      return NextResponse.json({ error: 'Shopify store URL is required' }, { status: 400 });
    }
    if (!monthlyRevenue || !['under_50k', '50k_100k', 'over_100k'].includes(monthlyRevenue)) {
      return NextResponse.json({ error: 'Invalid monthly revenue value' }, { status: 400 });
    }

    const newLead = await Lead.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      storeUrl: storeUrl.trim(),
      monthlyRevenue,
    });

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    console.error('API Leads POST Error:', error);
    return NextResponse.json({ error: error.message || 'Server error, failed to create lead' }, { status: 500 });
  }
}

export async function GET() {
  // TODO: protect this route once auth is added
  try {
    await dbConnect();
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error('API Leads GET Error:', error);
    return NextResponse.json({ error: 'Server error, failed to fetch leads' }, { status: 500 });
  }
}
