import { fetchUser } from "../utils/fetchLocalStorageData";
import { fetchCart } from "../utils/fetchLocalStorageData";


const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user: userInfo,
    farmItems: null,
    cartShow: false,
    cartItems: cartInfo,
};

