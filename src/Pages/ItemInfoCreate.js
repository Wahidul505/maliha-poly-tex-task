import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../Components/Heading';
import ItemInput from '../Components/ItemInput';

const ItemInfoCreate = () => {
    const navigate = useNavigate();

    const { data, isLoading, refetch } = useQuery(['items'], () => fetch('http://localhost:5000/item').then(res => res.json()))

    const handleAddNewItem = () => {
        const newItem = { itemType: '', itemName: '', subCategory: [], unitName: [], stockLimit: 0 };
        fetch('http://localhost:5000/item', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newItem)
        }).then(res => res.json()).then(data => {
            refetch()
            console.log(data)
        });
    }


    isLoading && <></>

    console.log(data)

    return (
        <div>
            <Heading>Create Item Information</Heading>

            <div className="overflow-x-auto relative mt-10">
                <table className="w-full text-sm text-left mb-8">
                    <thead class="text-gray-900 uppercase border-b border-gray-500">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Item Type
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Item Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Sub Category
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Unit Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Stock Limit
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            data && data.map(item => <ItemInput
                                key={item._id}
                                item={item}
                                refetch={refetch} />)
                        }
                    </tbody>
                </table>
                <button
                    onClick={handleAddNewItem}
                    className='bg-purple-500 text-xl text-white p-2 rounded'>
                    Add +
                </button>
            </div>
            <div className='flex justify-around items-center mt-16'>
                <button onClick={() => navigate('/')} className='bg-red-400 text-white rounded py-1 text-lg w-32'>Cancel</button>
                <button
                    onClick={() => {
                        navigate('/')
                        window.reload();
                    }}
                    className='bg-green-600 text-white rounded py-1 text-lg w-32'>Save</button>
            </div>
        </div>
    );
};

export default ItemInfoCreate;