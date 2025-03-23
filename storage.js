// Localstorage Key
const FOOD_LIST_KEY = "foodList";

function clearFoodListLocalStorage() {
    
    return localStorage.setItem(FOOD_LIST_KEY, null);
}

function getFoodListLocalStorageCache() {
    return JSON.parse(localStorage.getItem(FOOD_LIST_KEY));
}

function setFoodListLocalStorage(dt) {
    localStorage.setItem(FOOD_LIST_KEY, JSON.stringify(dt));
}
