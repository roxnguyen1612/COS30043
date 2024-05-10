<template>
  <div>
    <label for="userInput">Status:</label>
    <input type="text" id="userInput" v-model="strStatus">
    <button @click="add(strStatus)">Post</button>

    <ul>
      <li v-for="(post, index) in statPosts" :key="index">
        {{ post }}
        <button @click="remove(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskView',
  data() {
    return {
      statPosts: [],
      strStatus: ''
    };
  },
  methods: {
    add(status) {
      if (this.strStatus.trim() !== '') {
        // Add a new status to the list
        this.statPosts.push(this.strStatus);
        this.strStatus = ''; // Clear input after adding
      }
    },
    remove(index) {
      // Remove a status from the list using its index
      this.statPosts.splice(index, 1);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  margin: 5px 0;
}
button {
  margin-left: 10px;
}
</style>
