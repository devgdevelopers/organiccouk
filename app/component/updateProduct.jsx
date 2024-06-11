"use client"

import React, { useEffect, useState } from "react";
import QuillEditor from './QuillEditor';

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}

export default function UpdateProducts() {
    const [products, setProducts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [updatedCardHeading, setUpdatedCardHeading] = useState('');
    const [updatedCardSubHeading, setUpdatedCardSubHeading] = useState('');
    const [updatedCardFeatures, setUpdatedCardFeatures] = useState(['', '']);
    const [updatedShortDesc, setUpdatedShortDesc] = useState('');
    const [updatedCardImg, setUpdatedCardImg] = useState('');
    const [updatedImages, setUpdatedImages] = useState(['', '']);
    const [updatedContent, setUpdatedContent] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.data)
    setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error)
                setLoading(false);
            });
    };

    const deleteProduct = (id) => {
        fetch(`/api/products?id=${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(() => fetchProducts())
            .catch(error => console.error('Delete error:', error));
    };

    const updateProduct = (id) => {
        fetch(`/api/products?id=${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cardHeading: updatedCardHeading,
                cardSubHeading: updatedCardSubHeading,
                cardFeatures: updatedCardFeatures,
                shortDesc: updatedShortDesc,
                content: updatedContent,
                cardImg: updatedCardImg,
                images: updatedImages,
            })
        })
            .then(response => response.json())
            .then(() => {
                fetchProducts();
                setIsEditing(false);
                setCurrentProduct(null);
            })
            .catch(error => console.error('Update error:', error));
    };

    const startEditing = (product) => {
        setIsEditing(true);
        setCurrentProduct(product);
        setUpdatedCardHeading(product.cardHeading);
        setUpdatedCardSubHeading(product.cardSubHeading);
        setUpdatedCardFeatures(product.cardFeatures);
        setUpdatedShortDesc(product.shortDesc);
        setUpdatedContent(product.content);
        setUpdatedCardImg(product.cardImg);
        setUpdatedImages(product.images);
    };

    const handleFileUpload = async (e, setImageState) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setImageState(base64);
    };

    return (
        <div className="p-8 flex flex-col justify-center items-center">

{loading ? (
                <div className="flex justify-center items-center h-64">
  <div className="loader_ ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>

                </div>
            ):
            <div className="flex flex-wrap m-4 w-full justify-center">
                {products.map(product => (
                    <div key={product._id} className="p-4 max-w-xs">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
                            <div className="p-6 flex flex-col gap-2">
                                <img src={product.cardImg} alt="" className="object-cover h-48 w-full" />
                                <h2 className="text-xl font-semibold truncate" dangerouslySetInnerHTML={{__html:product.cardHeading}}></h2>
                                <p className="text-gray-600">{product.cardSubHeading}</p>
                                <div className='flex gap-3'>
                                    <button onClick={() => deleteProduct(product._id)} className="bg-red-500 text-white rounded p-2 border border-red-500 hover:border-white">Delete</button>
                                    <button onClick={() => startEditing(product)} className="bg-green-500 text-white p-2 rounded border border-green-500 hover:border-white">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
}
            {isEditing && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 pt-32 rounded shadow-lg w-full max-w-2xl overflow-auto max-h-full">
                        <h2 className="text-2xl mb-4 text-black">Edit Product</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-black font-medium">Card Heading</label>

                                <QuillEditor value={updatedCardHeading} onChange={setUpdatedCardHeading}  />
                            </div>
                            <div>
                                <label className="block mb-2 text-black font-medium">Card Sub Heading</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded text-black"
                                    placeholder='Card Sub Heading'
                                    type="text"
                                    value={updatedCardSubHeading}
                                    onChange={(e) => setUpdatedCardSubHeading(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-black font-medium">Card Features</label>
                                {updatedCardFeatures.map((feature, index) => (
                                    <input
                                        key={index}
                                        className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
                                        placeholder={`Feature ${index + 1}`}
                                        type="text"
                                        value={feature}
                                        onChange={(e) => {
                                            const newFeatures = [...updatedCardFeatures];
                                            newFeatures[index] = e.target.value;
                                            setUpdatedCardFeatures(newFeatures);
                                        }}
                                    />
                                ))}
                            </div>
                            <div>
                                <label className="block mb-2 text-black font-medium">Short Description</label>
                                <textarea
                                    className="w-full p-2 border border-gray-300 rounded text-black"
                                    value={updatedShortDesc}
                                    onChange={(e) => setUpdatedShortDesc(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-black font-medium">Content</label>
                                <div className="bg-white p-2 border border-gray-300 rounded">
                                    <QuillEditor value={updatedContent} onChange={setUpdatedContent} />
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2 mt-4 text-black font-medium">Card Image</label>
                                <input
                                    name="myFile"
                                    id="file-upload"
                                    type="file"
                                    label="Image"
                                    accept='.jpeg, .png, .jpg'
                                    onChange={(e) => handleFileUpload(e, setUpdatedCardImg)}
                                    className="w-full p-2 border border-gray-300 rounded text-black"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 mt-4 text-black font-medium">Additional Images</label>
                                {updatedImages.map((image, index) => (
                                    <input
                                        key={index}
                                        name="additionalImage"
                                        id={`file-upload-${index}`}
                                        type="file"
                                        accept='.jpeg, .png, .jpg'
                                        onChange={(e) => handleFileUpload(e, (base64) => {
                                            const newImages = [...updatedImages];
                                            newImages[index] = base64;
                                            setUpdatedImages(newImages);
                                        })}
                                        className="w-full p-2 border border-gray-300 rounded text-black mb-2"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button onClick={() => updateProduct(currentProduct._id)} className="bg-blue-500 text-white p-2 rounded">Save</button>
                                <button onClick={() => { setIsEditing(false); setCurrentProduct(null); }} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
