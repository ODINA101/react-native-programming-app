const InitialState = {
page:"htmlcss",
drawer:()=>{},
title:"HTML & CSS"
}



export default reducer = (state = InitialState,action) => {
   
    switch(action.type){
        case "pageChanged":
        return Object.assign({},state,{page:action.payload})
        break;
        case "DrawerRef":
        return Object.assign({},state,{drawer:action.payload})
        break;
        case "title":
        return Object.assign({},state,{title:action.payload})
        break;
        default:
        return state;
    }
}