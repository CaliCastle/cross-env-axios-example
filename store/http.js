export const state = () => ({})

export const actions = {
  send({ commit }, { uri, data, env }) {
    // checks to see if env is specified.
    let server = this.$env('current').endpoint
    if (env) {
      // env specified
      // then server variable is now the absolute prefix for our calls
      server = this.$env(env).endpoint
    }

    return this.$axios.$get(`${server}/${uri}`, {
      data,
    })
  },
}
