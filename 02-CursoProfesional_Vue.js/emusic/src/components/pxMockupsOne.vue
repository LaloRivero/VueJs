<template>
  <section class="registro">
    <img src="../assets/logo.jpg" alt="logo" class="registro-img" />
    <h1>Registro estación Platzi</h1>
    <div class="inputs">
      <h6 class="input-context">Nombre</h6>
      <input class="input" type="text" />
      <h6 class="input-context">Apellido</h6>
      <input class="input" type="text" />
      <h6 class="input-context">Cargo</h6>
      <input class="input cargo" type="text" />
    </div>
    <button class="enviar" type="submit">ENVIAR</button>
  </section>
</template>

<script>
export default {
  name: 'pxMockups1',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scope>
.registro {
  width: 320px;
  height: 409px;
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 10px 0 #d7d7d7;
  img {
    margin-top: 10px;
    width: 260px;
    align-self: center;
  }
  h1 {
    color: #00bfd6;
    margin: 15px 0 5px 15px;
  }
  .inputs {
    width: 100%;
    padding: 0 15px;
    .input {
      width: 90%;
      background: white;
      border-style: none;
      border-bottom: 1px solid #e98800;
    }
  }
  .input-context {
    margin: 0;
    padding-top: 5px;
    color: #e98800;
  }
  .cargo {
    margin-bottom: 10px;
  }
  button {
    font-weight: bold;
    font-size: 16px;
    width: 150px;
    height: 40px;
    margin-right: 15px;
    align-self: flex-end;
    color: white;
    background: #00bfd6;
    border: 1px solid #00dfd6;
    box-shadow: 0 2px 10px 0 #cccad9;
  }
}
</style>
