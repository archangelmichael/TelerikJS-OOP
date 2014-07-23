define(function () {
    'use strict';

    var Item = (function() {
        function Item(type, name, price) {
            try{
                checkValidType(type);
                checkValidPrice(price);
                checkValidName(name);
                this._type = type;
                this._price = price;
                this._name = name;
            }
            catch (exception) {
                console.warn(exception.message);
            }
        }

        function checkValidName(itemName) {
            //Name is a regular string between 6 and 40-characters-long
            if((typeof itemName !== "string") || itemName.length < 6 || itemName.length > 40){
                throw {message:"Invalid Item Name!"};
            }

            return this;
        }

        function checkValidPrice(itemPrice) {
            //Price is a decimal floating-point number
            if(isNaN(itemPrice)) {
                throw {message: "Invalid Item Price!"};
            }

            return this;
        }

        function checkValidType(itemType) {
            //Type is : 'accessory', 'smart-phone', 'notebook', 'pc' or 'tablet'.
            if (itemType !== 'accessory' && itemType !== 'smart-phone' && itemType !== 'notebook'&& itemType !== 'pc' && itemType !== 'tablet') {
                throw {message: "Invalid Item Type!"};
            }

            return this;
        }

        return Item;
    }());

    return Item;
});