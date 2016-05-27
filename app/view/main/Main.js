/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MultiLanguage.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MultiLanguage.view.main.MainController',
        'MultiLanguage.view.main.MainModel',
        'MultiLanguage.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    /*plugins: 'viewport',*/


    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            //xtype: 'mainlist'
			xtype:'container',
			layout: {
			    type: 'vbox',
			    align : 'stretch',
			    pack  : 'start'
			},
			items:[{
				margin:5,
                xtype: 'combobox',
                fieldLabel: 'Language',
			    store: new Ext.data.ArrayStore({
					fields: [
						'id',
						'lang'
					],
					data:[['it', 'Italiano'], ['en', 'English'],['es', 'Español']]  // data is local
				}),
			    queryMode: 'local',
			    displayField: 'lang',
			    valueField: 'id',
                listeners:{
                    change:function(thisObj,newValue,oldValue,eOpts){
                        console.log(newValue);

						var search = location.search,
						index = search.indexOf('&'),
						params = Ext.urlEncode({'lang': newValue });
						location.search = (index === -1) ? params : params + search.substr(index);
						

                    }
                }
			},{
				html:'Down',
				xtype: 'mainlist'
			}]
        }]
    }]
});
