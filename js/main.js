const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Homepage",
    };
  },
  methods: {
    toggle: function() {
        const content = document.querySelector('.content-area');
        const sidebar = document.querySelector('.sidebar');
        content.classList.toggle('no-sidebar');
        sidebar.classList.toggle('no-sidebar');
    }
  }
}).mount("#app");