<script>
export default {
  name: "ModalCreateElement",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  // render(createElement) {
  //   return createElement("p", "Hello World!");
  // }
  render(createElement) {
    return this.show
      ? createElement(
          "div",
          {
            class: "modal"
          },
          [
            createElement(
              "div",
              {
                class: "content"
              },
              this.$slots.default
            ),
            createElement(
              "button",
              {
                class: "btn",
                on: {
                  click: this.clickCancelHandeler
                }
              },
              "Cancel"
            ),
            createElement(
              "button",
              {
                class: "btn",
                on: {
                  click: this.clickOkHandeler
                }
              },
              "OK"
            )
          ]
        )
      : null;
  },
  methods: {
    clickCancelHandeler() {
      console.log("Click on Cancel");
    },
    clickOkHandeler() {
      console.log("Click on Ok");
    }
  }
};
</script>