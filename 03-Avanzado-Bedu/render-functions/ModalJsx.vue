<script>
export default {
  name: "ModalJsx",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return this.show ? (
      <div class="modal">
        <div class="content">{this.$slots.default}</div>
        <button onClick={this.clickCancelHandeler}>Cancel</button>
        <button onClick={this.clickOkHandeler}>Ok</button>
      </div>
    ) : null;
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