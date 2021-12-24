// solution
app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        },
        price : {
            type: Number,
            required: true
        },
        test: {
            type: String,

        }
    },
    template:
        /*html*/
        `<div>
  <ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
  <p> pPrice: {{price}} && {{test}}</p>
  </div>`
})