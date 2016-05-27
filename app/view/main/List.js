/**
 * This view is an example list of people.
 */
Ext.define('MultiLanguage.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MultiLanguage.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },

    initComponent: function () {

	    this.title = MultiLanguage.Title.list.personnel;
        this.columns =  [
            { text: MultiLanguage.grid.List.column.name ,  dataIndex: 'name' },
            { text: MultiLanguage.grid.List.column.email, dataIndex: 'email', flex: 1 },
            { text: MultiLanguage.grid.List.column.phone, dataIndex: 'phone', flex: 1 }
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
