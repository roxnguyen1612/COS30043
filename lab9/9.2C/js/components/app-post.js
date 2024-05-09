// app-postdata component
const PostData = {
  template: `
  <v-row>
    <v-col cols="12" md="6 " >

    <v-card
       class="mx-auto"
       max-width="90%"
       >

       <v-card-text>
   	<v-form>
          <v-text-field label="Code" v-model="code" /></v-text-field>
   				<v-text-field label="Description" v-model="desc" /></v-text-field>
           <v-text-field label="Credit Points" v-model="cp" /></v-text-field>
   				<v-text-field label="Type" v-model="type" /></v-text-field>


        <v-btn
        depressed
        v-on:click="postData(code,desc,cp,type)"
        color="primary">
        Add
      </v-btn>

   	</v-form>
    </v-card-text>

    </v-card>

    </v-col >
      <!-- Output -->
        <v-col cols="12"
            md="6">
    <v-card
       class="mx-auto"
       max-width="90%"
       >
       <v-card-text>
        <p>Output Message : {{ msg }}</p>
   			<p>Status Code: {{statusVal}}</p>
   			<p>Status: {{statusText}}</p>
   			<p>Response Headers: {{headers}}</p>
   	</v-card-text>
</v-card>
</v-col>
</v-row>

   `,
  data: function() {
    return {
      code: '',
      desc: '',
      cp: '',
      type: '',
      msg: '',
      statusVal: '',
      statusText: '',
      headers: '',
      savingSuccessful: false
    }
  },
  methods: {

    postData: function(code,desc,cp,type) {
      //define url for api
      var postSQLApiURL = 'resources/apis.php/'

      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: code,
          desc: desc,
          cp: cp,
          type: type
        })
      };

       
		
		fetch(postSQLApiURL, requestOptions)
		.then( response =>{
		  //turning the response into the usable data
		  return response.json( );
		})
		.then( data =>{
		  //This is the data you wanted to get from url
		   self.msg = "Data Inserted Successfully."  ;
		})
		.catch(error => {
		   self.msg = 'There was an error!' + error;
		});	
	
		
		
    }

  }
};
