import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCartProducts,
  getSubTotal,
  removeCartItem,
  increment,
  decrement,
} from "../features/auth/cartSlice";
const Cart = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cartItems, subAmount } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartProducts());
    dispatch(getSubTotal());
  }, [dispatch]);

  return (
    <div className="h-[500px] flex justify-around mt-20">
      <div className="mt-10 ">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://img.freepik.com/premium-vector/smartphone-shop-shopping-cart-shopping-cart-is-web-searcher-tab-icon-there-is-buy-icon-it-shopping-online-conceptvector-3d-isolated-orange-background_425581-28.jpg?w=2000"
            alt="shopping-cart"
            className="rounded-full w-52"
          />

          {Object.keys(cartItems).length > 0 ? (
            <h1 className="mt-5 text-2xl font-bold"> Your shopping cart </h1>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h1 className="mt-5 text-2xl font-bold"> Your cart is empty </h1>
              <div
                onClick={() => navigate(`/home`, { replace: true })}
                className="p-4 mt-3 text-center bg-orange-600 rounded-sm cursor-pointer text-slate-50"
              >
                Go to Home
              </div>
            </div>
          )}
        </div>
      </div>
      {Object.keys(cartItems).length > 0 && (
        <div className="flex flex-col">
          <div className="cart-table">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                          >
                            Price
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {cartItems.map((item) => (
                          <tr key={item.id} className="">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.title}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                              <div className="">
                                <button
                                  className="p-2 border rounded-l-md bg-button"
                                  onClick={() => {
                                    dispatch(decrement(item.id));
                                    dispatch(getSubTotal());
                                    // dispatch(getCartCount())
                                    // dispatch(calculateTax())
                                    // dispatch(getTotalAmount())
                                  }}
                                >
                                  &mdash;
                                </button>
                                <input
                                  className="p-2 text-center border outline-none select-none w-14 input_quantity"
                                  //  value={this.state.value}
                                  readOnly
                                  value={item.quantity}
                                  type="number"
                                />
                                <button
                                  className="p-2 border rounded-r-md bg-button"
                                  onClick={() => {
                                    dispatch(increment(item.id));
                                    dispatch(getSubTotal());
                                    // dispatch(getCartCount())
                                    // dispatch(calculateTax())
                                    // dispatch(getTotalAmount())
                                  }}
                                >
                                  &#xff0b;
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>{item.price}</p>
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 hover:text-rose-900"
                                onClick={() => {
                                  dispatch(removeCartItem(item.id));
                                  dispatch(getSubTotal());
                                }}
                              >
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path
                                  fillRule="evenodd"
                                  d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between total_order">
            <p className="mt-8 text-base font-medium">
              Total : <span className=""> {subAmount}</span>
            </p>
            <div className="p-4 mt-3 bg-orange-600 rounded-sm text-slate-50">
              Order
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
