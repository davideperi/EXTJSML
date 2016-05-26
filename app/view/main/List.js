/**
 * This view is an example list of people.
 */
Ext.define('MultiLanguage.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MultiLanguage.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    initComponent: function () {

        this.columns =  [
            { text: MultiLanguage.grid.List.column.name ,  dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone', flex: 1 }
        ];

        this.callParent();
    },
	/*
    columns: [
		{ text: MultiLanguage.grid.List.column.name ,  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
	*/

    listeners: {
        select: 'onItemSelected'
    }
});
