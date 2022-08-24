import React, { useState } from 'react';
import { addBtn, removeBtn } from '../TailwindClasses';


const ItemInput = ({ item, refetch }) => {

    const { _id, itemType, itemName, subCategory, unitName, stockLimit } = item;

    const [subCatEdit, setSubCatEdit] = useState(false);
    const [newSubCategory, setNewSubCategory] = useState('');
    const [newUnitName, setNewUnitName] = useState('');
    const [unitNameEdit, setUnitNameEdit] = useState(false);
    const [currentItemType, setCurrentItemType] = useState(itemType);
    const [currentItemName, setCurrentItemName] = useState(itemName);
    const [currentSubCategory, setCurrentSubCategory] = useState(subCategory);
    const [currentUnitName, setCurrentUnitName] = useState(unitName);
    const [currentStockLimit, setCurrentStockLimit] = useState(stockLimit);
    const [isUpdateMode, setIsUpdateMode] = useState(false);




    const handleUpdate = (id) => {
        const newItem = {
            itemType: currentItemType,
            itemName: currentItemName,
            subCategory: currentSubCategory,
            unitName: currentUnitName,
            stockLimit: currentStockLimit,
        };
        fetch(`http://localhost:5000/item/${id}`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(newItem)
        }).then(res => res.json()).then(data => console.log(data))
    }


    const handleRemoveItem = (id) => {
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => refetch())
    }



    return (
        <tr className="">
            {/* for item type  */}
            <th scope="row" className="py-3">
                <select name="item_type" id="" className='bg-gray-200 p-2 rounded-lg'
                    defaultValue={currentItemType} onChange={e => setCurrentItemType(e.target.value)}>
                    <option value="electronics">Electronics</option>
                    <option value="groceries" >Groceries</option>
                    <option value="cloths" >Cloths and Fashions</option>
                    <option value="babies" >Babies and toys</option>
                    <option value="sports" >Sports</option>
                </select>
            </th>

            {/* for item name  */}

            <td className="py-3">
                {
                    isUpdateMode ?
                        <input type="text" placeholder='Item Name'
                            className='border border-gray-400 rounded focus:outline-none p-2'
                            value={currentItemName}
                            onChange={e => setCurrentItemName(e.target.value)} />
                        :
                        <span>{currentItemName}</span>
                }
            </td>

            {/* for sub category  */}

            <td className="py-3">
                <div className='flex gap-2 items-center'>
                    {
                        subCatEdit ? <div className='flex gap-1 justify-center'>
                            <input
                                onChange={e => setNewSubCategory(e.target.value)}
                                type="text" className='border border-gray-400 rounded focus:outline-none p-1 w-1/3' />
                            <button
                                onClick={() => {
                                    setCurrentSubCategory([...currentSubCategory, newSubCategory]);
                                    setSubCatEdit(false);
                                }}
                                className='bg-green-500 text-white p-1 rounded'>Add</button>
                            <button onClick={() => setSubCatEdit(false)} className='bg-red-500 text-white p-1 rounded'>Close</button>
                        </div>
                            :
                            <select name="item_type" id="" className='bg-gray-200 p-2 rounded-lg w-32'>
                                {
                                    currentSubCategory &&
                                    currentSubCategory.map((singleSubCategory, index) => <option key={index} value={singleSubCategory}>{singleSubCategory}</option>)
                                }
                            </select>
                    }
                    {
                        !subCatEdit && isUpdateMode &&
                        <button className={addBtn} onClick={() => setSubCatEdit(true)}>+</button>
                    }
                </div>
            </td>

            {/* for unit name  */}

            <td className="py-3">
                <div className='flex gap-2 items-center'>
                    {
                        unitNameEdit ? <div className='flex gap-1 justify-center'>
                            <input
                                onChange={e => setNewUnitName(e.target.value)}
                                type="text" className='border border-gray-400 rounded focus:outline-none p-1 w-1/3' />
                            <button
                                onClick={() => {
                                    setCurrentUnitName([...currentUnitName, newUnitName]);
                                    setUnitNameEdit(false);
                                }}
                                className='bg-green-500 text-white p-1 rounded'>Add</button>
                            <button onClick={() => setUnitNameEdit(false)} className='bg-red-500 text-white p-1 rounded'>Close</button>
                        </div>
                            :
                            <select name="item_type" id="" className='bg-gray-200 p-2 rounded-lg w-32'>
                                {
                                    currentUnitName &&
                                    currentUnitName.map((singleUnitName, index) => <option key={index}>{singleUnitName}</option>)
                                }
                            </select>
                    }
                    {
                        !unitNameEdit && isUpdateMode &&
                        <button className={addBtn} onClick={() => setUnitNameEdit(true)}>+</button>
                    }
                </div>
            </td>

            {/* for stock limit  */}

            <td className="py-3">
                {
                    isUpdateMode ?
                        <input
                            value={currentStockLimit}
                            onChange={e => setCurrentStockLimit(e.target.value)}
                            type="number" placeholder='Stock Limit' className='border border-gray-400 rounded focus:outline-none p-2' />
                        :
                        <span>{stockLimit}</span>
                }
            </td>

            <td className="py-3">
                {
                    isUpdateMode ?
                        <button onClick={() => {
                            setIsUpdateMode(false);
                            handleUpdate(_id)
                        }} className='bg-yellow-500 text-white p-1 rounded mr-2'>Done</button>
                        :
                        <button onClick={() => {
                            setIsUpdateMode(true)
                        }} className='bg-green-500 text-white p-1 rounded mr-2'>update</button>
                }

                <button onClick={() => {
                    handleRemoveItem(_id)
                }} className={removeBtn}>X</button>
            </td>
        </tr>
    );
};

export default ItemInput;