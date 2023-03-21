export default function reducers(state,action){
    switch (action.type) {
        case 'SET_USER':
        
        const {user} =action.payload    
        AsyncStorage.setItem('@User',JSON.stringify(user))
        
        return {...state,user}
            
       
        default:
           return  state
    }
}