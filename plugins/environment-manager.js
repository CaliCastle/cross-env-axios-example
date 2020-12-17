const environments = [
  {
    endpoint: 'https://env-alpha.game.com/admin',
    adHoc: true,
    current: false,
  },
  {
    endpoint: 'https://env-beta.game.com/admin',
    adHoc: false,
    current: false,
  },
  {
    endpoint: 'https://env-charlie.game.com/admin',
    adHoc: false,
    current: true,
  },
]

export default ({ app }, inject) => {
  inject('env', (key) => environments.find((i) => i[key] === true))
}
