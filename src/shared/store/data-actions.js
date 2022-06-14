import { userActions } from "./users";
import { userDataActions } from "./users-data";

export const fetchUserNumber = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://reqres.in/api/users?page=1'
            );

            if(!response.ok){
                throw new Error('Could not fetch data!');
            }

            const data = await response.json();

            return data;
        };

        try{
            dispatch(userActions.setLoadingState(true));

            const userData = await fetchData();
            // console.log(userData)

            dispatch(userActions.setLoadingState(false));
            dispatch(userActions.addItems({totalUsers: (userData.total / userData.total_pages), userId: userData.data}));
        } catch(error){
            dispatch(
                userActions.setErrorState(true)
            );
        }
    }
}


export const fetchUserData = (userId) => {
    return async (dispatch) => {
        const fetchData = async () => {
            dispatch(userDataActions.setData({first_name: '', last_name: '', email: '', avatar: ''}));

            const response = await fetch(
                `https://reqres.in/api/users/${userId}`
            );

            if(!response.ok){
                throw new Error('Could not fetch data!');
            }

            const data = await response.json();

            return data;
        };

        try{
            dispatch(userDataActions.setLoadingState(true));

            const userData = await fetchData();
            // console.log(userData.data);

            dispatch(userDataActions.setLoadingState(false));
            dispatch(userDataActions.setData(userData.data));
        } catch(error){
            dispatch(
                userDataActions.setErrorState(true)
            );
        }
    }
}