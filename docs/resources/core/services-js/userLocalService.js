var app = angular.module('userLocal.service', []);

app.service('UserLocalService', [function () {
	
	const user = {
		name: "Juan Alberto",
		last_name: "Rodriguez Sotelo",
		mail: "juan.rodriguez2803@hotmail.com",
		date_register: "19/08/2020, 01:01:38",
		location: "Morelos",
		password: "qwerty12",
		address: "Some Adrress...",
		phone: "5529717374",
		job: "Web Developer",
		user_msj: "Welcome this is a demo site enjoy!"
	}

	var context = this;
	
	context.getUserLocal = function () {
		return user;
	}
	
	return context;
	

}])