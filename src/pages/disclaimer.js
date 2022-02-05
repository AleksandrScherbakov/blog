import * as React from "react"
import {NotificationsProvider} from 'reapop'
import Layout from "../components/layout";

const DisclaimerPage = () => {
    return (
        <NotificationsProvider>
            <Layout title={'Disclaimer | Blog'}>
                <div className={'disclaimer'}>
                    <h1>Disclaimer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis leo at felis bibendum lacinia. Aliquam venenatis magna est, sed placerat metus euismod sed. Nullam iaculis imperdiet magna. Mauris sed lacus nec quam dignissim efficitur quis a enim. Aenean nec leo quis nibh rhoncus aliquam non ac erat. Morbi at massa et sapien efficitur sagittis. Donec et risus id urna tincidunt dignissim. Aenean mollis velit non ornare bibendum. Duis consectetur dapibus luctus. Ut feugiat, turpis id euismod euismod, ipsum erat vehicula augue, sed vulputate ligula ligula at diam. Pellentesque aliquam, diam a interdum porttitor, libero mi tristique velit, in rhoncus libero sapien sed purus. Praesent in lectus sit amet neque rhoncus luctus. Vivamus lacinia lectus accumsan turpis commodo, id pellentesque ipsum fringilla.</p>

                    <p>Nullam id risus sollicitudin, pretium enim vel, aliquam neque. Etiam sed ligula dolor. Aenean sed efficitur nulla, sit amet venenatis odio. Quisque et porttitor orci, ut feugiat nunc. Fusce rhoncus eget sapien vel finibus. In porttitor felis est, a pretium elit cursus laoreet. Nulla mattis massa tellus, a porttitor nisi semper nec. Sed ornare porta eleifend.</p>
                </div>
            </Layout>
        </NotificationsProvider>
    )
}

export default DisclaimerPage
