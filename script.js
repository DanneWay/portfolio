
const navLlist = document.querySelector("ul.nav-list");
const navLlist_2 = document.querySelector("div.nav-list-2");
const myCheckbox = document.querySelector('#mycheck');
const checkIcon = document.querySelector('#check-icon');

myCheckbox.addEventListener("change", function(){
	if(this.checked == true){
		if(checkIcon.classList.contains("fa-bars")){
			checkIcon.classList.remove('fa-bars');
			checkIcon.classList.remove('text-[#d4d5c9]');

			checkIcon.classList.add('fa-times');
			checkIcon.classList.add('text-[#dc143c]');
		}

		if(navLlist_2.classList.contains("hidden")){
			navLlist_2.classList.remove('hidden');
		}
	}else{
		if(checkIcon.classList.contains("fa-times")){
			checkIcon.classList.remove('fa-times');
			checkIcon.classList.remove('text-[#dc143c]');

			checkIcon.classList.add('fa-bars');
			checkIcon.classList.add('text-[#d4d5c9]');
		}

		if(!navLlist_2.classList.contains("hidden")){
			navLlist_2.classList.add('hidden');
		}
	}
});