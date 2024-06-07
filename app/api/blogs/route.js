// import { clientPromise } from '../../../dbConfig/dbConfig';
// import { ObjectId } from 'mongodb';
// import Post from '../../../models/post.model';

// export async function POST(req) {
//     const client = await clientPromise;
//     const db = client.db('test');

//     try {
//         const { title, content, shortDesc } = await req.json();
//         const imgFile = req.files ? req.files.img : null;
//         console.log(imgFile);

//         const newImage = await Post.create(imgFile)
//         newImage.save();

//         const result = await db.collection('blogs').insertOne({ title, content, shortDesc });
//         return new Response(JSON.stringify(result.insertedId), { status: 201 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//     }
// }

// export async function GET() {
//     const client = await clientPromise;
//     const db = client.db('test');

//     try {
//         const posts = await db.collection('blogs').find({}).toArray();
//         return new Response(JSON.stringify({ status: 200, data: posts }), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//     }
// }

// export async function DELETE(req) {
//     const client = await clientPromise;
//     const db = client.db('test');
//     const blogId = new URL(req.url).searchParams.get('id');

//     try {
//         const result = await db.collection('blogs').deleteOne({ _id: new ObjectId(blogId) });
//         return new Response(JSON.stringify({ deletedId: blogId }), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//     }
// }

// export async function PUT(req) {
//     const client = await clientPromise;
//     const db = client.db('test');
//     const blogId = new URL(req.url).searchParams.get('id');
//     let bodyObject = await req.json();

//     try {
//         const result = await db.collection('blogs').updateOne({ _id: new ObjectId(blogId) }, { $set: bodyObject });
//         return new Response(JSON.stringify({ updatedId: blogId }), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//     }
// }

import { clientPromise } from '../../../dbConfig/dbConfig';
import { ObjectId } from 'mongodb';

export async function POST(req) {
    const client = await clientPromise;
    const db = client.db('test');

    try {
        const { title, content, shortDesc, img } = await req.json();

        const result = await db.collection('blogs').insertOne({ title, content, shortDesc, img });
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
            const post = await db.collection('blogs').findOne({ _id: new ObjectId(id) });
            if (post) {
                return new Response(JSON.stringify(post), { status: 200 });
            } else {
                return new Response(JSON.stringify({ error: 'Blog post not found' }), { status: 404 });
            }
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
    } else {
        try {
            const posts = await db.collection('blogs').find({}).toArray();
            return new Response(JSON.stringify({ status: 200, data: posts }), { status: 200 });
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
    }
}

export async function DELETE(req) {
    const client = await clientPromise;
    const db = client.db('test');
    const blogId = new URL(req.url).searchParams.get('id');

    try {
        const result = await db.collection('blogs').deleteOne({ _id: new ObjectId(blogId) });
        return new Response(JSON.stringify({ deletedId: blogId }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function PUT(req) {
    const client = await clientPromise;
    const db = client.db('test');
    const blogId = new URL(req.url).searchParams.get('id');
    let bodyObject = await req.json();

    try {
        const result = await db.collection('blogs').updateOne({ _id: new ObjectId(blogId) }, { $set: bodyObject });
        return new Response(JSON.stringify({ updatedId: blogId }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}


