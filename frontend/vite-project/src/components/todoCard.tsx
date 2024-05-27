import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoCard = ({ id, title, description, status, handleUpdateStatus, handleDeleteTodo }: any) => {
    const [updateStatus, setUpdateStatus] = useState(status);

    const updateHandler = async (newStatus: string) => {
        try {
            await handleUpdateStatus(id, newStatus);
            setUpdateStatus(newStatus);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const deleteHandler = async () => {
        await handleDeleteTodo(id);
    };

    return (
      
        <div className="max-w-lg mx-auto mt-10 mb-4 p-4 rounded-md shadow-md bg-white">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <FaTrash className="text-red-500 cursor-pointer" onClick={deleteHandler} />
            </div>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <div className="mt-4">
                <select
                    className="w-full rounded-full bg-gray-50 text-sm text-gray-600 hover:bg-gray-100"
                    value={updateStatus}
                    onChange={(e) => updateHandler(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="Inprogress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </div>
    );
};

export default TodoCard;
