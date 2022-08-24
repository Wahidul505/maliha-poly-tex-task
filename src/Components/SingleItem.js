import React from 'react';

const SingleItem = ({ item }) => {
    const { itemType, itemName, subCategory, unitName, stockLimit } = item;
    return (
        <tr class="border-b">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {itemType}
            </th>
            <td class="py-4 px-6">
                {itemName}
            </td>
            <td class="py-4 px-6">
                <select name="" id="" className='w-full'>
                    {
                        subCategory && subCategory.map((singleSubCategory, index) => <option key={index} value={singleSubCategory}>{singleSubCategory}</option>)
                    }
                </select>
            </td>
            <td class="py-4 px-6">
                <select name="" id="" className='w-full'>
                    {
                        unitName && unitName.map((singleUnitName, index) => <option key={index} value={singleUnitName}>{singleUnitName}</option>)
                    }
                </select>
            </td>
            <td class="py-4 px-6">
                {stockLimit}
            </td>
        </tr>
    );
};

export default SingleItem;