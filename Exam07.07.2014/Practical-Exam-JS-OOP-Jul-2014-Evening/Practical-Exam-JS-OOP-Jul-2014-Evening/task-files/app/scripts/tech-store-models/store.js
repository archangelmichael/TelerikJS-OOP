define(function () {
    'use strict';

    var Store = (function() {
        function Store(name) {
            try{
                checkValidName(name);
                this._name = name;
            }
            catch (exception) {
                console.warn(exception.message);
            }

            this._stock = [];
        }

        //adds an item to the stock of the store. A store can keep in stock only items of type Item
        Store.prototype.addItem = function (item) {
            this._stock.push(item);
//            if (item instanceof Item) {
//                this._stock.push(item);
//            }
//            else {
//                throw {message: "Stores can only store items!"};
//            }
            return this;
        };

        //returns a collection of all items, sorted lexicographically by the name of the items
        Store.prototype.getAll = function () {
            var storeStock = this._stock.sort(sortItemsBy("_name"));
            return storeStock;
        };

        // returns a collection of only the items in stock that have type 'smart-phone',
        // sorted lexicographically by the name of the items
        Store.prototype.getSmartPhones = function () {
            var itemsOfType = filterItemsByGivenType(this._stock, "smart-phone");
            return itemsOfType.sort(sortItemsBy("_name"));
        };

        // returns a collection of only the items in stock
        // that have type either 'smart-phone' or 'tablet',
        // sorted lexicographically by the name of the items
        Store.prototype.getMobiles = function () {
            var smartPhones = filterItemsByGivenType(this._stock, "smart-phone");
            var tablets = filterItemsByGivenType(this._stock, "tablet");
            var itemsOfType = smartPhones.concat(tablets);
            return itemsOfType.sort(sortItemsBy("_name"));
        };

        // returns a collection of only the items in stock
        // that have type either 'pc' or 'notebook',
        // sorted lexicographically by the name of the items
        Store.prototype.getComputers = function () {
            var pcs = filterItemsByGivenType(this._stock, "pc");
            var notebooks = filterItemsByGivenType(this._stock, "notebook");
            var itemsOfType = pcs.concat(notebooks);
            return itemsOfType.sort(sortItemsBy("_name"));
        };

        // returns a collection of only the items
        // that have a price from the price range in the options parameter,
        // sorted ascending by the price of the items.
        // The options object is optional and have optional properties min and max.
        // If min is missing, it should be considered as 0
        // If max is missing, it should be considered + infinity
        Store.prototype.filterItemsByPrice = function (options) {
            var min = 0;
            var max = Infinity;

            if (options) {
                if(options["min"]){
                    min = options["min"];
                }
                if(options["max"]){
                    max = options["max"];
                }
            }

            var itemsOfType = this._stock.filter(function (item) {
                return item._price > min && item._price < max;
            });

            return itemsOfType.sort(sortItemsBy("_price"));
        };

        // returns a collection of only the items in stock
        // that have type equal to the given filterType (item.type === filterType),
        // sorted lexicographically by the name of the items
  // ATTENTION: !!!!! we can also call this.filterItemsByType, but i prefer to use common private function filterItemsByGivenType
        Store.prototype.filterItemsByType = function (filterType) {
            var itemsOfType = filterItemsByGivenType(this._stock, filterType);
            return itemsOfType.sort(sortItemsBy("_name"));
        };

        // returns a collection of only the items in stock that have a name containing partOfName,
        // sorted lexicographically by the name of the items.
        // The search should be performed case insensitive
        Store.prototype.filterItemsByName = function (partOfName) {
            var search = partOfName.toLowerCase();
            var itemsContainingPartOfName = this._stock.filter(function (item) {
                return item._name.toLowerCase().indexOf(search) > -1;
            });
            return itemsContainingPartOfName.sort(sortItemsBy("_name"));
        };

        // returns an associative array that have as keys the types,
        // that are of items in stock in the store,
        // and values that are equal to the number of items with this type
        Store.prototype.countItemsByType = function () {
            var types = ['accessory','smart-phone','notebook','pc','tablet'];
            var result = [];
            var type,
                itemsOfType,
                itemsCount;
            for(var i= 0;i < types.length; i++) {
                type = types[i];
                itemsOfType = filterItemsByGivenType(this._stock, type);
                itemsCount = itemsOfType.length;
                if(itemsCount > 0) {
                    result.push({ type: type, count: itemsCount });
                }
            }

            return result;
        };

        function filterItemsByGivenType(arrayOfItems, type) {
            var items = arrayOfItems.filter(function (item) {return item._type === type });
            return items;
        }


        function sortItemsBy(prop) {
            if(prop === "_name") {
                return function (a, b) {
                    return a[prop].localeCompare(b[prop]);
                };
            }

            if(prop === "_price"){
                return function (a, b) {
                    return a[prop] - b[prop];
                };
            }
        }

        function checkValidName(storeName) {
            //Name is a regular string between 6 and 40-characters-long
            if((typeof  storeName !== "string") || storeName.length < 6 || storeName.length > 40){
                throw {message:"Invalid Store Name!"};
            }

            return this;
        }

        return Store;
    }());

    return Store;
});