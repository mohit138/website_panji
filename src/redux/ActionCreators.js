import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';


// for products

export const servicesLoading = () =>({
    type: ActionTypes.SERVICES_LOADING
});

export const addServices = (services) =>({
    type: ActionTypes.ADD_SERVICES,
    payload: services
});

export const servicesFailed = (errmess) =>({
    type: ActionTypes.SERVICES_FAILED,
    payload: errmess
});

export const fetchServices = () => (dispatch) =>{
    dispatch(servicesLoading(true));

    return fetch(baseUrl+'services.json')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(services => dispatch(addServices(services)))
        .catch(error => dispatch(servicesFailed(error.message)));
}

//  for clients !!!
export const clientsLoading = () =>({
    type: ActionTypes.CLIENTS_LOADING
});

export const addClients = (products) =>({
    type: ActionTypes.ADD_CLIENTS,
    payload: products
});

export const clientsFailed = (errmess) =>({
    type: ActionTypes.CLIENTS_FAILED,
    payload: errmess
});

export const fetchClients = () => (dispatch) =>{
    dispatch(clientsLoading(true));

    return fetch(baseUrl+'clients.json')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(clients => dispatch(addClients(clients)))
        .catch(error => dispatch(clientsFailed(error.message)));
}

