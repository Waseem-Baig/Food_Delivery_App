import React from "react";
import { useOrders } from "../contexts/ordersContext"; // Import the hook

const Orders = () => {
  const { orders } = useOrders(); // Get orders from context

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4 text-gray-800 xs:text-lg">
        Order History
      </h1>
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider xs:px-2 xs:text-[10px]">
                Order ID
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider xs:px-2 xs:text-[10px]">
                Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider xs:px-2 xs:text-[10px]">
                Total
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider xs:px-2 xs:text-[10px]">
                Items
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-4 text-center text-gray-500 xs:px-2 xs:py-2 xs:text-sm"
                >
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900 xs:px-2 xs:text-xs">
                    {order.id}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500 xs:px-2 xs:text-xs">
                    {order.date}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500 xs:px-2 xs:text-xs">
                    ₹{order.total.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500 xs:px-2 xs:text-xs">
                    <div className="flex flex-col space-y-2 xs:space-y-1 xs:flex-row xs:flex-wrap xs:items-center">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 xs:space-x-2 xs:items-start xs:w-full"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg border border-gray-200 xs:w-12 xs:h-12"
                          />
                          <div className="flex flex-col xs:ml-2 xs:text-left">
                            <span className="text-gray-800 font-medium text-sm xs:text-xs">
                              {item.name}
                            </span>
                            <span className="text-gray-600 text-sm xs:text-xs">
                              {item.quantity} pcs
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
