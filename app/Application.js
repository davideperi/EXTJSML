/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MultiLanguage.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MultiLanguage',

    stores: [
        // TODO: add global / shared stores here
    ],

    init: function () {
	
		/*
        // TODO - Launch the application
		console.log('Init launched!');
		
		var params = Ext.urlDecode(window.location.search.substring(1));
		var record, url;
		
		if (params.lang) {
			console.log('Load lang from query param');
			url = Ext.util.Format.format((Ext.devMode ? 'build/' : '') + 'Locale/MultiLanguage-{0}.js', params.lang);
			
			console.log(url);
			
			Ext.Loader.loadScript({
				url: url,
				onLoad: this.onSuccess,
				onError: this.onFailure,
				scope: this
			});
		}
		else{
			this.setupApp();
		}
		*/
    },
	onSuccess: function() {
		/*
		console.log('load JS success');
		this.setupApp();
		*/
    },
    onFailure: function() {
		/*
		console.log('load JS failure');
		this.setupApp();
		*/
    },
    
    launch: function () {
        // TODO - Launch the application
		/*
		console.log('App lauched!');
		*/
    },
	setupApp: function(){
		/*
		console.log('Setup app lauched!');
		var loadView = 'app-main';
		Ext.create({ xtype: loadView });
		*/
	},

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
