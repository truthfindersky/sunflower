import { createApp, h, resolveComponent } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import AuthenticatedLayout from "./Layouts/AuthenticatedLayout.vue";
import GuestLayout from "./Layouts/GuestLayout.vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

createInertiaApp({
    title: (title) => `My App ${title}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`].default;

        // Set the default layout if not already defined
        //page.layout = page.layout || AuthenticatedLayout;


        // If the page is directly inside `resources/js/Pages/`, use GuestLayout
        if (["Home", "About"].includes(name) || name.startsWith("Auth/")) {
            page.layout = page.layout || GuestLayout;
        } else {
            page.layout = page.layout || AuthenticatedLayout;
        }


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
