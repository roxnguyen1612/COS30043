<template>
  <div class="hello">
    <h1>Welcome {{ firstName }} {{ lastName }}!</h1>
    <label for="fname">First Name:</label>
    <input id="fname" type="text" v-model="firstName" @input="updateFirstName">
    <label for="lname">Last Name:</label>
    <input id="lname" type="text" v-model="lastName" @input="updateLastName">
  
  <h2>Select a Picture:</h2>
    <label>
      <input type="radio" value="picture1.jpg" v-model="selectedPicture" @change="updatePicture">
      Picture 1
    </label>
    <label>
      <input type="radio" value="picture2.jpg" v-model="selectedPicture" @change="updatePicture">
      Picture 2
    </label>

    <img v-if="selectedPicture" :src="getPicturePath(selectedPicture)" alt="Selected" style="margin-top: 20px;">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    fname: {
      type: String,
      required: true
    },
    lname: {
      type: String,
      required: true
    }

  },
  data() {
    return {
      firstName: this.fname,
      lastName: this.lname,
      selectedPicture: ''
    };
  },
  methods: {
    updateFirstName(event) {
      // Emit event to update `fname` in the parent component
      this.$emit('update:fname', event.target.value);
    },
    updateLastName(event) {
      // Emit event to update `lname` in the parent component
      this.$emit('update:lname', event.target.value);
    },
    updatePicture(event) {
      // Emit the event to update the picture filename
      this.$emit('update:picture', event.target.value);
    },
    getPicturePath(filename) {
      // Resolve the image path from the assets folder
      return require(`@/assets/${filename}`);
    }
  },
  watch: {
    // Synchronize data with prop changes
    fname(newValue) {
      this.firstName = newValue;
    },
    lname(newValue) {
      this.lastName = newValue;
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 20px 0;
}
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
