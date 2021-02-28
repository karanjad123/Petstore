import { SwitchVideo } from "@material-ui/icons";

export const initialState = {
    basket:[],
    user:null
};
export const getTotal =(basket)=>{
    let sum=0
    for(let i=0;i<basket.length;i++){
        sum=sum+basket[i].price;
    }
    return sum;
}
const reducer =(state, action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            let newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
            }
            else {
                console.warn('can not remove product as it is not it the basket')
            }
            return{
                ...state,
                basket:newBasket
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[]
            }
        default:
            return state
        }
    };
    export default reducer