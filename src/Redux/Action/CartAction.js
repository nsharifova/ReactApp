import { BASE_URL } from "../../api/BaseConfig";

// export const addToCartt=(id,qty)=> async(dispatch,getState)=>{
//    const data=await((await fetch(`${BASE_URL}/product/${id}`)).json())
//    dispatch({
//        type:"ADD_TO_CART",
//        payload:{
//            id:data.productId,
//            name:data.title,
//            price:data.priceNoDiscount,
//            qty
//        }
//    })
//    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
// }

export function addToCart(id, quantity) {
    const thunkinIsledeceyiCallback = async (dispatch, getState) => {
        const response = await fetch(`${BASE_URL}/product/${id}`);
        const responseData = await response.json();
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: responseData.productId,
                name: responseData.title,
                price: responseData.priceNoDiscount,
                qty: quantity,
            },
        });
        localStorage.setItem(
            "cartItems",
            JSON.stringify(getState().cart.cartItems)
        );
    };

    return thunkinIsledeceyiCallback;
}
