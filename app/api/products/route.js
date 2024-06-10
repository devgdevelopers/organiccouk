import { clientPromise } from '../../../dbConfig/dbConfig';
import { ObjectId } from 'mongodb';

export async function POST(req) {
    const client = await clientPromise;
    const db = client.db('test');

    try {
        const { cardHeading, cardSubHeading , cardFeatures, cardImg, shortDesc, images, content } = await req.json();

        const result = await db.collection('products').insertOne({ cardHeading, cardSubHeading , cardFeatures, cardImg, shortDesc, images, content });
        return new Response(JSON.stringify(result.insertedId), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function GET(req) {
    const client = await clientPromise;
    const db = client.db('test');
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
        try {
            const post = await db.collection('products').findOne({ _id: new ObjectId(id) });
            if (post) {
                return new Response(JSON.stringify(post), { status: 200 });
            } else {
                return new Response(JSON.stringify({ error: 'Products not found' }), { status: 404 });
            }
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
    } else {
        try {
            const posts = await db.collection('products').find({}).toArray();
            const count = await db.collection('products').countDocuments();
            return new Response(JSON.stringify({ status: 200, data: posts, count }), { status: 200 });
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
    }
}

export async function DELETE(req) {
    const client = await clientPromise;
    const db = client.db('test');
    const productId = new URL(req.url).searchParams.get('id');

    try {
        const result = await db.collection('products').deleteOne({ _id: new ObjectId(productId) });
        return new Response(JSON.stringify({ deletedId: productId }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function PUT(req) {
    const client = await clientPromise;
    const db = client.db('test');
    const productId = new URL(req.url).searchParams.get('id');
    let bodyObject = await req.json();

    try {
        const result = await db.collection('products').updateOne({ _id: new ObjectId(productId) }, { $set: bodyObject });
        return new Response(JSON.stringify({ updatedId: productId }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}


