const { createApp } = Vue;
const app = createApp({
    data: () => ({
        fName: '',
        lName: '',
        userName: '',
        pwd: '',
        pwd2: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobileNumber: '',
        showTerms: false,
        errors: {}
    }),
    methods: {
        checkForm:function(e){
            var result = true
			this.errors = []

            //first name
			if (!this.fName.trim()) {
				result = false
				this.errors.push ("Please enter first name.")		
			} 
            else if (!this.fName.match(/^[a-zA-Z]+$/))
            {
                result = false
                this.errors.push('First name must contain only letters.');
            }

            //last name
			if (!this.lName.trim()) {
				result = false
				this.errors.push ("Please enter last name.")		
			}
            else if (!this.lName.match(/^[a-zA-Z]+$/)) {
                result = false
                this.errors.push ('Last name must contain only letters.');
            }

            //username
            if (!this.userName.trim()) {
				result = false
				this.errors.push ("Please enter user name.")		
			}
            else if (this.userName.length < 3) 
            {
                result = false
				this.errors.push ("Username must be at least 3 characters long.")
            }

            //email
            if (!this.email.trim()) {
				result = false
				this.errors.push ("Please enter email")		
			} else if (!this.email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
                this.errors.push ("Please enter a valid email")
            }


            //password
            if (!this.pwd.trim()) {
				result = false
				this.errors.push ("Please enter password")		
			}
            else if (!this.pwd.match(/[$%^&*]{1}/) || this.pwd.length < 8)
            {
                result = false
				this.errors.push ("Password must be at least 8 characters long and include at least one special character ($, %, ^, &, *).")
            }
            if (this.pwd !== this.pwd2) {
				result = false
				this.errors.push ("Passwords do not match.")		
			}

            //streetAddress
            if (this.streetAddress.length > 40) {
                result = false
				this.errors.push ("Street address maximum 40 characters")
            }

            //suburb
            if (this.suburb.length > 20) {
                result = false
				this.errors.push ("Suburb maximum 20 characters")
            }

            //postcode
            if (!this.postcode.trim()) {
				result = false
				this.errors.push ("Please enter postcode")
            } else if (!this.postcode.match(/^\d{4}$/)) {
                result = false
				this.errors.push ("Postcode must be exactly 4 digits")
            }

            //mobileNumber
            if (!this.mobileNumber.trim()) {
				result = false
				this.errors.push ("Please enter mobile number")
            } else if (!this.mobileNumber.match(/^04\d{8}$/)) {
                result = false
				this.errors.push ("Mobile number must start with 04 followed by 8 digits.")
            }


			if (!result)
				e.preventDefault()// prevent form submission	
        }
    }
});
app.mount('#app');
