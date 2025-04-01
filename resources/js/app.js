import { createApp, h, resolveComponent } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import DefaultLayout from "./Layouts/Layout.vue"; 
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

createInertiaApp({
    title: (title) => `My App ${title}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`].default;

        // Set the default layout if not already defined
        page.layout = page.layout || DefaultLayout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);
    },
});
