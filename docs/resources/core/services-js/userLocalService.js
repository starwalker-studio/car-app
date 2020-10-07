var app = angular.module('userLocal.service', []);

app.service('UserLocalService', [function () {
	
	const user = {
		name: "Juan Alberto",
		last_name: "Rodriguez Sotelo",
		mail: "starwalker@mail.com",
		date_register: "19/08/2020, 01:01:38",
		location: "Cuernavaca",
		password: "qwerty12",
		address: "Av. Rancho Viejo #72 MZ 10 Lt 7",
		phone: "5529717374",
		job: "Web Developer",
		user_msj: "Testing new updates on application!"
	}

	var context = this;
	
	context.getUserLocal = function () {
		return user;
	}
	
	return context;
	

}])