// import components from './components'

// const plugin = {
//   install(Vue: any) {
//     for (const prop in components) {
//       if (components.hasOwnProperty(prop)) {
//         const component = components[prop]
//         Vue.component(component.props.componentName.default, component)
//       }
//     }
//   }
// }

// export default plugin

export { default as DekpButton } from './components/DekpButton/DekpButton.vue';
export { default as DekpInput } from './components/DekpInput/DekpInput.vue';
export { default as DekpPage } from './components/DekpPage/DekpPage.vue';
export { default as DekpTextarea } from './components/DekpTextarea/DekpTextarea.vue';
