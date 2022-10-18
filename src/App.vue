<template>
  <div id="app">
    <lucky-button/>
    <lucky-button type="primary" />
    <lucky-button type="success" round/>
    <lucky-button type="danger" round/>
    <lucky-button type="warning" />
    <lucky-button type="info" />
    <p />
    <lucky-button type="primary" size="large" />
    <lucky-button type="primary" size="large" round/>
    <lucky-button type="primary" />
    <lucky-button type="primary" size="small" round/>
    <lucky-button type="primary" size="small" />
    <lucky-button type="primary" size="mini" />
    <lucky-button type="primary" bg-color="#feae08" />
    <lucky-button type="primary" :bg-color="['#297cdb', '#d71103']" />
    <p />
    <lucky-icon></lucky-icon>
    <lucky-button icon="smile-fill" onlyIcon/>
    <lucky-button icon="smile" onlyIcon type="primary" />
    <lucky-button icon="smile" onlyIcon type="primary" circle/>
    <lucky-button icon="smile" onlyIcon size="small" type="primary" circle/>
    <lucky-button icon="smile" onlyIcon size="large" type="primary" circle/>
    <lucky-button icon="smile" onlyIcon size="mini" type="primary" circle/>
    <lucky-button icon="smile" onlyIcon size="mini" type="primary" :iconSize="12" circle/>
    <lucky-button icon="smile" type="primary" :iconSize="12"/>
    <lucky-button icon="smile" iconPlace="right" type="primary" :iconSize="18"/>
  </div>
</template>

<script>
import luckyButton from './package/lucky-button/lucky-button'
import luckyIcon from './package/lucky-icon/lucky-icon'

export default {
  name: 'App',
  components: {
    luckyButton,
    luckyIcon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 3.75rem;
}
</style>
