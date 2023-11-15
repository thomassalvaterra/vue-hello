const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'Benvenuto',
            image: "https://unsplash.it/300/300?image="
        }
    },
};

createApp(opzioni).mount('#app')