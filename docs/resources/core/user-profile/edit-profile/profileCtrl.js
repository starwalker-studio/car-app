"use strict";
app.controller('profileCtrl', ['$scope',  
								'UserLocalService',
								function($scope,
										UserLocalService){	
	
	loadLocalUser();
	const { mail, password, user_msj, name, last_name, phone, job, address } = $scope.user;	
	const number = phone;
	const format = number.toString().replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "($1) $2$3-$4");
	$scope.user.phone = format;

	$scope.passwordSame = true;
	$scope.editProfileMsj = true;
	$scope.editName = true;
	$scope.editLastName = true;
	$scope.editPhone = true;
	$scope.editProfesion = true;
	$scope.editAddress = true;
	$scope.editMail = true;
	$scope.editPassword = true;
	$scope.checkboxModel = {
			value : false
	};
	
	$scope.newUserMailPassword = {
			newMail: '',
			newPassword: '',
			confirmPassword: '',
			confirmNewPassword: ''
	};
	
	const {newMail, newPassword, confirmPassword, confirmNewPassword} = $scope.newUserMailPassword;
	
	$scope.saveChanges = function() {
		var validate = false;
		angular.forEach($scope.user, function(value) {
			if (value === '') {
				validate = true;
			}
		});
		if (validate) {
			Swal.fire({
				  title: 'Do not leave blank boxes',
				  icon: 'info'
				})
		} else {
			Swal.fire({
				  title: 'Do you want to save the changes?',
				  showDenyButton: true,
				  showCancelButton: true,
				  confirmButtonText: `Save`,
				  denyButtonText: `Don't save`,
				}).then((result) => {
				  if (result.isConfirmed) {
					unmaskNumber();
					checkMailPasswordChanges();					
					console.log($scope.user);						
					setSuccessTimeout();				
				  } else if (result.isDenied) {
					  document.getElementById('reset').click();
				  }
				})
		} 
	}
	
	$scope.resetValues = function() {
		resetAll();
	}
	
	$scope.resetEdit = function( editCase ) {
		resetValueEdit( editCase );
	}
	
	function checkMailPasswordChanges() {
		if ($scope.checkboxModel.value) {
			/* just change the password */
			if ( $scope.newUserMailPassword.newMail === newMail 
					&& $scope.newUserMailPassword.confirmNewPassword !== confirmNewPassword) {
				$scope.user.mail = mail;				
				$scope.user.password = $scope.newUserMailPassword.confirmNewPassword;
			}
			/* just change the mail */
			if ( $scope.newUserMailPassword.newMail !== newMail 
					&& $scope.newUserMailPassword.confirmNewPassword === confirmNewPassword) {
				$scope.user.mail = $scope.newUserMailPassword.newMail;				
				$scope.user.password = password;
			}
			/* Both */
			if ( $scope.newUserMailPassword.newMail !== newMail 
					&& $scope.newUserMailPassword.confirmNewPassword !== confirmNewPassword) {
				$scope.user.mail = $scope.newUserMailPassword.newMail;				
				$scope.user.password = $scope.newUserMailPassword.confirmNewPassword;
			}
		} else {
			$scope.user.mail = mail;
			$scope.user.password = password;
		}
	}
	
	function resetValueEdit( editCase ) {
		switch (editCase) {
		case 'resetProfileMsj':
			$scope.user.user_msj = user_msj;
			break;
		case 'resetName':
			$scope.user.name = name;
			break;
		case 'resetLastName':
			$scope.user.last_name = last_name;
			break;
		case 'resetPhone':
			$scope.user.phone = format;
			break;
		case 'resetProfesion':
			$scope.user.job = job;
			break;
		case 'resetAddress':
			$scope.user.address = address;
			break;

		default:
			break;
		}
	}
	
	function resetAll() {
		$scope.user.user_msj = user_msj;
		$scope.user.name = name;
		$scope.user.last_name = last_name;
		$scope.user.phone = format;
		$scope.user.job = job;
		$scope.user.address = address;
		$scope.newUserMailPassword.newMail = newMail;
		$scope.newUserMailPassword.newPassword = newPassword;
		$scope.newUserMailPassword.confirmPassword = confirmPassword;
		$scope.newUserMailPassword.confirmNewPassword = confirmNewPassword;
		$scope.checkboxModel.value = false;
	}
	
	function loadLocalUser() {
		$scope.user = UserLocalService.getUserLocal();	
	}
	
	function unmaskNumber() {
		var unmaskNumber = $scope.user.phone;
		var setNumber = unmaskNumber.toString().replace(/[^\d]/g, "");
		$scope.user.phone = parseInt(setNumber);
	}
	
	function setSuccessTimeout() {
		  reference = setTimeout(function(){
			  Swal.fire({
					title: 'Saved!', 
					text: '', 
					icon: 'success',
					showConfirmButton: false,
					timer: 1800
			})
			window.location.reload();
		  }, 1000);
		  return reference;
		}
		
}]);