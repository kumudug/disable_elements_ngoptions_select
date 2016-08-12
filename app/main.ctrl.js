(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = []; 

    function mainController() {
        /* jshint validthis:true */
        var vm = this;

        vm.items = [
            {
                id: 0,
                value: 'item1'
            },
            {
                id: 1,
                value: 'item2'
            },
            {
                id: 2,
                value: 'item3'
            },
            {
                id: 3,
                value: 'item4'
            },
            {
                id: 4,
                value: 'item5'
            },
            {
                id: 5,
                value: 'item6'
            },
            {
                id: 6,
                value: 'item7'
            },
            {
                id: 7,
                value: 'item8'
            },
            {
                id: 8,
                value: 'item9'
            },
            {
                id: 9,
                value: 'item10'
            }
        ];

        vm.boundVar = null;
        vm.disabled = function(item) {
            if (item.id === 2 || item.id === 7) {
                return true;
            }
            return false;
        }
    }
})();
