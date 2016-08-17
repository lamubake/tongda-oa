/*
 * File: app/store/ProjList.js
 *
 */

Ext.define('ProjManage.store.ProjList', {
   extend: 'Ext.data.Store',
   requires: [
      'ProjManage.model.ProjList'
   ],

   constructor: function(cfg) {
      var me = this;
      cfg = cfg || {};
      me.callParent([Ext.apply({
         autoLoad: true,
         filterOnLoad: false,
         storeId: 'ProjList',
         model: 'ProjManage.model.ProjList',
         /*sortRoot: 'datastr',*/
         pageSize: 10,
         remoteFilter: true,
         proxy: {
            type: 'ajax',
            url: 'query.php',
            reader: {
               type: 'json',
               root: 'datastr',
               totalProperty: 'results'
            }
         },
		 fields: grid_field
      }, cfg)]);
   }
});