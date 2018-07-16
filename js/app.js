new Vue({
	el:'#vue-app',
	data: {
		name: 'jaerbi',
		job: 'deweloper'
	},
	methods: {
		greeting: function(time){
			return 'Привіт, добрий ' + time + ' - ' + this.name;
		}	
	}
});