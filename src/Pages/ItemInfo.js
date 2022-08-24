import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import SingleItem from '../Components/SingleItem';

const ItemInfo = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div>
            <Heading>Item Information</Heading>

            <div className="overflow-x-auto relative mt-10">
                <table className="w-full text-left mb-8 text-sm">
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
                            items && items.map(item => <SingleItem key={item._id} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ItemInfo;